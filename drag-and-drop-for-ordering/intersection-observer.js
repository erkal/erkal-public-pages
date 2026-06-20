// IntersectionObserver wiring for Play.Multipage.
//
// Multipage's runtime emits `registerPanes : List String` as a Cmd from
// init. This shim subscribes to that port, queries the DOM for each
// instanceId after a `requestAnimationFrame` (so Elm has had a chance to
// paint), and observes each pane against the viewport. Visibility
// changes flow back via the `visibilityChanged` port.
//
// Initial visibility is computed synchronously via getBoundingClientRect
// on first registration, before the IntersectionObserver's first async
// callback — so the runtime sees correct visibility on frame 1 instead
// of "everything invisible" until the observer wakes up.

const VISIBILITY_THRESHOLD = 0.1;

let observer = null;
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
    requestAnimationFrame(() => {
      registerPanesFromIds(app, instanceIds);
    });
  });
}

function registerPanesFromIds(app, instanceIds) {
  if (!observer) {
    observer = new IntersectionObserver(handleIntersections.bind(null, app), {
      threshold: VISIBILITY_THRESHOLD,
    });
  }
  for (const instanceId of instanceIds) {
    const element = document.getElementById(instanceId);
    if (!element) {
      console.warn(
        `intersection-observer: pane element not found for instanceId="${instanceId}"`
      );
      continue;
    }
    if (registered.has(instanceId)) {
      continue;
    }
    const initialVisible = computeVisibility(element);
    registered.set(instanceId, { element, lastVisible: initialVisible });
    observer.observe(element);
    sendVisibilityChanged(app, instanceId, initialVisible);
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
