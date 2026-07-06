// IntersectionObserver wiring for Play.Multipage.
//
// Multipage's runtime emits `registerPanes : List String` as a Cmd from init —
// the full set of instance ids. This shim tracks which of those panes are
// actually in the DOM, observes each against the viewport, and reports
// visibility changes back through the `visibilityChanged` port.
//
// Registration is REACTIVE to the DOM, not a one-time scan. A layout is free to
// mount only some instances at a time — e.g. a story that shows one page at a
// time renders just the current instance and swaps it on navigation — so a pane
// can appear or disappear long after init. A MutationObserver re-syncs the
// registered set whenever the DOM changes, registering a pane the moment its
// element mounts and dropping it when it leaves. (A one-time scan at init would
// permanently miss every pane mounted later. That is not just a visibility bug:
// input.js resolves the click-owning pane from this same registered set, so an
// unregistered pane's instance receives no pointer input at all.)
//
// Initial visibility is computed synchronously via getBoundingClientRect the
// moment a pane registers, before the IntersectionObserver's first async
// callback — so the runtime sees correct visibility on the pane's first mounted
// frame instead of "invisible" until the observer wakes up.

const VISIBILITY_THRESHOLD = 0.1;

let observer = null;
let mutationObserver = null;
let syncScheduled = false;
let knownIds = [];
const registered = new Map(); // instanceId -> { element, lastVisible }

export function getRegisteredPaneElements() {
  const out = [];
  for (const [id, { element }] of registered) {
    out.push([id, element]);
  }
  return out;
}

export function setupIntersectionObserver(app) {
  app.ports?.registerPanes?.subscribe?.((instanceIds) => {
    // The full static instance-id set (Runtime emits `registerPanes` once from
    // init). Load-bearing: an id absent here can never register, so if the
    // instance set ever becomes dynamic the runtime must re-emit registerPanes.
    knownIds = instanceIds;
    if (!observer) {
      observer = new IntersectionObserver(handleIntersections.bind(null, app), {
        threshold: VISIBILITY_THRESHOLD,
      });
    }
    // Re-sync on any DOM change, so a pane that mounts after init registers as
    // soon as it appears. `childList` catches instance mount/unmount. We also
    // watch `data-play-pane`: a single-mount layout that isn't keyed lets Elm
    // REUSE one pane node across instances, patching only its attributes
    // ("1"→"2") with no childList change (e.g. plain page 3→4, identical
    // structure). Without that filter the swap wouldn't re-sync, leaving the
    // node registered under the stale id. `data-play-pane` changes only on such
    // a swap, so both filters stay idle in steady state — unlike a blanket
    // `attributes: true`, which a live canvas's width/transform fires every frame.
    if (!mutationObserver) {
      mutationObserver = new MutationObserver(() => scheduleSync(app));
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["data-play-pane"],
      });
    }
    scheduleSync(app);
  });
}

// Coalesce a burst of mutations into one reconcile per frame, run after paint so
// getBoundingClientRect sees the settled layout.
function scheduleSync(app) {
  if (syncScheduled) return;
  syncScheduled = true;
  requestAnimationFrame(() => {
    syncScheduled = false;
    syncRegistrations(app);
  });
}

// Reconcile `registered` with the live DOM: register any known pane whose
// element is now present (or has been swapped for a new element), and drop any
// whose element has left. Idempotent — a pane already bound to its current
// element is left untouched.
function syncRegistrations(app) {
  // Resolve panes by their explicit `data-play-pane` marker (set by the runtime
  // in renderInstance), NOT `getElementById(instanceId)`: a hosted page may
  // render its own elements with ids that collide with instance ids, and
  // getElementById would wrongly return one of those as if it were the pane.
  const paneByInstanceId = new Map();
  for (const el of document.querySelectorAll("[data-play-pane]")) {
    paneByInstanceId.set(el.getAttribute("data-play-pane"), el);
  }
  const present = new Set();
  for (const instanceId of knownIds) {
    const element = paneByInstanceId.get(instanceId);
    // Not mounted yet — normal for a lazy/single-mount layout, so no warning
    // (the old per-scan warn flooded these). Trade-off: a genuinely misconfigured
    // id (declared but rendered by no layout) is then silently inert — never
    // registers, so its instance gets no pointer input. Surfaces at dev time as
    // an unresponsive pane; see feedback_multipage_pane_registration_must_be_reactive.
    if (!element) continue;
    present.add(instanceId);
    const existing = registered.get(instanceId);
    if (existing && existing.element === element) continue;
    if (existing) observer.unobserve(existing.element);
    const initialVisible = computeVisibility(element);
    registered.set(instanceId, { element, lastVisible: initialVisible });
    observer.observe(element);
    sendVisibilityChanged(app, instanceId, initialVisible);
  }
  for (const [instanceId, entry] of [...registered]) {
    if (present.has(instanceId)) continue;
    registered.delete(instanceId);
    sendVisibilityChanged(app, instanceId, false);
    // A reused DOM node whose id changed this frame is briefly bound to both its
    // old and new instanceId; the register loop already re-observed it under the
    // new id. `unobserve` isn't ref-counted, so only stop observing when no
    // surviving pane still points at this element.
    const stillBound = [...registered.values()].some((r) => r.element === entry.element);
    if (!stillBound) observer.unobserve(entry.element);
  }
}

function handleIntersections(app, entries) {
  for (const entry of entries) {
    let instanceId = null;
    for (const [id, { element }] of registered) {
      if (element === entry.target) {
        instanceId = id;
        break;
      }
    }
    if (instanceId === null) continue;

    const visible = entry.intersectionRatio >= VISIBILITY_THRESHOLD;
    const stored = registered.get(instanceId);
    if (stored.lastVisible !== visible) {
      stored.lastVisible = visible;
      sendVisibilityChanged(app, instanceId, visible);
    }
  }
}

function sendVisibilityChanged(app, instanceId, visible) {
  app.ports?.visibilityChanged?.send?.({ instanceId, visible });
}

function computeVisibility(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const visibleHeight =
    Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  const visibleWidth =
    Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);
  if (visibleHeight <= 0 || visibleWidth <= 0) return false;
  const visibleArea = visibleHeight * visibleWidth;
  const totalArea = rect.height * rect.width;
  if (totalArea === 0) return false;
  return visibleArea / totalArea >= VISIBILITY_THRESHOLD;
}
