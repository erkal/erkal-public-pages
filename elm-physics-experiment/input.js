import {
  setupSoundShim,
  soundLoad,
  soundUnload,
  soundCancel,
  soundWireKey,
} from "./sound-shim.js";
import {
  setupIntersectionObserver,
  getRegisteredPaneElements,
} from "./intersection-observer.js";

export { sendInputsToElmApp, inputs };

const textInputTypes = new Set([
  "text",
  "password",
  "email",
  "search",
  "url",
  "tel",
  "number",
]);

const inputs =
  /*
    initial inputs
  */
  {
    operatingSystem: (() => {
      // Try modern userAgentData first (more reliable but not supported in all browsers)
      if (navigator.userAgentData) {
        const platform = navigator.userAgentData.platform.toLowerCase();

        if (platform.includes("win")) return "windows";
        if (platform.includes("mac")) return "mac";
        if (platform.includes("linux")) return "linux";
        if (platform.includes("android")) return "android";
      }

      // Fallback to userAgent string
      const userAgent = navigator.userAgent.toLowerCase();

      // iOS must be tested BEFORE "mac": every iOS user-agent contains
      // "like Mac OS X", so a bare "mac" test matches iPhones/iPads first.
      // The iphone/ipad/ipod tokens never appear in a genuine macOS UA, so
      // real Macs still fall through to the "mac" branch below.
      if (
        userAgent.includes("iphone") ||
        userAgent.includes("ipad") ||
        userAgent.includes("ipod")
      )
        return "ios";
      if (userAgent.includes("windows")) return "windows";
      if (userAgent.includes("mac")) return "mac";
      if (userAgent.includes("linux")) return "linux";
      if (userAgent.includes("android")) return "android";

      return "unknown";
    })(),
    dt: 0,
    keyboard: {
      // states
      pressedKeys: [],
      ctrl: false,
      meta: false,
      alt: false,
      shift: false,
      left: false,
      right: false,
      up: false,
      down: false,
      // actions
      downs: [],
    },
    pointer: {
      // states
      x: 0,
      y: 0,
      isDown: false,
      elementIdsForLastDown: [],
      // actions
      down: false,
      doubleClick: false,
      move: false,
      up: false,
      rightDown: false,
      rightUp: false,
      dx: 0,
      dy: 0,
    },
    // The pointer as seen at the window before any HUD/chrome gating.
    // `pointer` is fed by bubble-phase listeners, so a panel that calls
    // `stopPropagation` on `pointerdown` (to keep the canvas inert)
    // also hides the press from `pointer`. `rawPointer` is fed by
    // capture-phase listeners, which run before any bubble-phase
    // `stopPropagation` — so a widget hosted inside guarded chrome
    // (e.g. a drag-to-reorder list) can still see its own presses.
    // The literal mirrors `pointer`'s shape so it matches the Elm
    // `Pointer` type alias, but only x, y, isDown, down, move, up, and
    // elementIdsForLastDown are ever updated; doubleClick, rightDown,
    // rightUp, dx, and dy stay at their defaults — no drag reads them.
    rawPointer: {
      // states
      x: 0,
      y: 0,
      isDown: false,
      elementIdsForLastDown: [],
      // actions
      down: false,
      doubleClick: false,
      move: false,
      up: false,
      rightDown: false,
      rightUp: false,
      dx: 0,
      dy: 0,
    },
    // Active contacts: one entry per finger on the screen; a held left
    // mouse button or a stylus tip in contact counts too. Same centered
    // Y-up mapping as `pointer`. Presence in the list is the "down"
    // state — entries are removed on pointerup/pointercancel (capture
    // phase, so a release over guarded chrome cannot leak an entry).
    // Mirrors the Elm `Touch` type alias: { id, x, y }.
    touches: [],
    wheel: {
      // actions
      deltaX: 0,
      deltaY: 0,
      pinchDeltaForChrome: 0,
      // states
      pinchScaleForSafari: null,
      elementIdsForLastWheel: [],
    },
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    devicePixelRatio: window.devicePixelRatio,
    darkModeIsOn: window.matchMedia("(prefers-color-scheme: dark)").matches,
    focusedElementIsTextInput: false,
    focusedElementIsContentEditable: false,
    boundingClientRects: [],
    paneBoundingBoxes: [],
    pageScroll: {
      top: 0,
      left: 0,
      contentWidth: 0,
      contentHeight: 0,
      viewportWidth: 0,
      viewportHeight: 0,
    },
    // Set from the URL query by `index-template.html` just before
    // `Elm.init` — the single URL→Elm channel. Frozen at cold start;
    // consumer pages read it once to hydrate URL-bound state.
    // `null` ↔ Elm `Nothing`.
    searchParamsFromUrl: null,
    // Every `play:*` key as a flat [key, value] pair list. JS never parses
    // the values — each feature decodes its own raw string in Elm — so the
    // strict-flag-decoder crash class cannot occur.
    persisted: (() => {
      const out = [];
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith("play:"))
            out.push([k, localStorage.getItem(k)]);
        }
      } catch (e) {
        console.warn("[play] persisted read failed", e);
      }
      return out;
    })(),
    pageId: location.pathname,
    deviceOrientation: null,
    screenOrientationAngle: (screen.orientation && screen.orientation.angle) || 0,
  };

let initialized = false;

const sendInputsToElmApp = (app) => {
  if (initialized) {
    console.warn("sendInputsToElmApp called more than once. Ignoring.");
    return;
  }
  initialized = true;

  /*
    Prevent default right-click-menu of the browser
  */
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  /*
    Prevent default zoom-gestures of the browser
  */
  window.addEventListener(
    "gesturestart",
    (e) => {
      e.preventDefault();
      inputs.wheel.pinchScaleForSafari = e.scale;
    },
    { passive: false }
  );

  window.addEventListener(
    "gesturechange",
    (e) => {
      e.preventDefault();
      inputs.wheel.pinchScaleForSafari = e.scale;
    },
    { passive: false }
  );

  window.addEventListener(
    "gestureend",
    (e) => {
      e.preventDefault();
      inputs.wheel.pinchScaleForSafari = null;
    },
    { passive: false }
  );

  // For browsers that don't support gesture events (like Chrome)
  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  /*
    helper functions for getting information out of events
  */
  const isCtrlKey = (e) => ["ControlLeft", "ControlRight"].includes(e.code);
  const isMetaKey = (e) => ["MetaLeft", "MetaRight"].includes(e.code);
  const isAltKey = (e) => ["AltLeft", "AltRight"].includes(e.code);
  const isShiftKey = (e) => ["ShiftLeft", "ShiftRight"].includes(e.code);
  const isArrowLeftKey = (e) => e.code === "ArrowLeft";
  const isArrowRightKey = (e) => e.code === "ArrowRight";
  const isArrowUpKey = (e) => e.code === "ArrowUp";
  const isArrowDownKey = (e) => e.code === "ArrowDown";

  const isLeftMouseButton = (e) => e.button === 0;
  const isRightMouseButton = (e) => e.button === 2;

  /*
    the states should be reset when the browser tab looses focus
  */
  function resetStates(inputs) {
    inputs.keyboard.pressedKeys = [];
    inputs.keyboard.ctrl = false;
    inputs.keyboard.meta = false;
    inputs.keyboard.alt = false;
    inputs.keyboard.shift = false;
    inputs.keyboard.left = false;
    inputs.keyboard.right = false;
    inputs.keyboard.up = false;
    inputs.keyboard.down = false;
    inputs.pointer.isDown = false;
    inputs.rawPointer.isDown = false;
    inputs.touches = [];
    inputs.wheel.pinchScaleForSafari = null;
  }

  /*
    the actions live only one tick. They must be reset for the next tick
  */
  function resetActions(inputs) {
    inputs.keyboard.downs = [];
    inputs.pointer.down = false;
    inputs.pointer.doubleClick = false;
    inputs.pointer.move = false;
    inputs.pointer.up = false;
    inputs.pointer.rightDown = false;
    inputs.pointer.rightUp = false;
    inputs.pointer.dx = 0;
    inputs.pointer.dy = 0;
    inputs.rawPointer.down = false;
    inputs.rawPointer.move = false;
    inputs.rawPointer.up = false;
    inputs.wheel.deltaX = 0;
    inputs.wheel.deltaY = 0;
    inputs.wheel.pinchDeltaForChrome = 0;
  }

  // Persistent cache for bounding-rect data sent to Elm every animation frame.
  // We reuse the same objects instead of allocating new ones each frame.
  // This is safe because Elm's port send() decodes values synchronously
  // (via _Json_run) before enqueueing — the JS objects are fully consumed
  // before send() returns.
  // Only `left`, `right`, `top`, `bottom` are included because those are the
  // only fields Elm's BoundingBox type decodes (see Geometry/BoundingBox.elm).
  let cachedResult = [];

  function updateBoundingClientRects(inputs) {
    const frames = document.querySelectorAll('[id^="measure-frame--"]');
    const numFrames = frames.length;

    // Grow / shrink outer array
    for (let f = cachedResult.length; f < numFrames; f++) {
      cachedResult.push({
        frameId: "",
        scroll: {
          top: 0,
          left: 0,
          contentWidth: 0,
          contentHeight: 0,
          viewportWidth: 0,
          viewportHeight: 0,
        },
        elements: [],
      });
    }
    cachedResult.length = numFrames;

    for (let f = 0; f < numFrames; f++) {
      const frame = frames[f];
      const frameRect = frame.getBoundingClientRect();
      const elements = frame.getElementsByClassName("measure-aware-element");
      const len = elements.length;

      const frameData = cachedResult[f];
      frameData.frameId = frame.id.slice("measure-frame--".length);
      frameData.scroll.top = frame.scrollTop;
      frameData.scroll.left = frame.scrollLeft;
      frameData.scroll.contentWidth = frame.scrollWidth;
      frameData.scroll.contentHeight = frame.scrollHeight;
      frameData.scroll.viewportWidth = frame.clientWidth;
      frameData.scroll.viewportHeight = frame.clientHeight;

      const cached = frameData.elements;

      // Grow: push new entry objects as needed
      for (let i = cached.length; i < len; i++) {
        cached.push({
          id: "",
          boundingClientRect: { left: 0, right: 0, top: 0, bottom: 0 },
        });
      }
      // Shrink: drop removed elements
      cached.length = len;

      // Mutate entries in place — zero allocations in steady state per frame
      for (let i = 0; i < len; i++) {
        const elementRect = elements[i].getBoundingClientRect();
        const entry = cached[i];
        entry.id = elements[i].id;
        const rect = entry.boundingClientRect;
        rect.left = elementRect.left - frameRect.x;
        rect.right = elementRect.right - frameRect.x;
        rect.top = elementRect.top - frameRect.top;
        rect.bottom = elementRect.bottom - frameRect.top;
      }
    }

    inputs.boundingClientRects = cachedResult;
  }

  // Viewport (client) coords — getBoundingClientRect with NO scroll added —
  // so they align with the pointer's clientX-based mapping
  // (pointer.x = e.clientX - 0.5*screen.width). Page coords (rect + scroll)
  // would drift from the pointer whenever iOS leaves a phantom window scroll
  // under the position:fixed canvas (cf. WebKit 170595). Mutation-in-place
  // pattern matches updateBoundingClientRects above.
  const paneBoxCache = [];

  function updatePaneBoundingBoxes(inputs) {
    const panes = getRegisteredPaneElements();
    const len = panes.length;

    for (let i = paneBoxCache.length; i < len; i++) {
      paneBoxCache.push({ paneId: "", left: 0, top: 0, width: 0, height: 0 });
    }
    paneBoxCache.length = len;

    for (let i = 0; i < len; i++) {
      const [id, el] = panes[i];
      const rect = el.getBoundingClientRect();
      const entry = paneBoxCache[i];
      entry.paneId = id;
      entry.left = rect.left;
      entry.top = rect.top;
      entry.width = rect.width;
      entry.height = rect.height;
    }
    inputs.paneBoundingBoxes = paneBoxCache;
  }

  // Page scroll — the runtime's `#play-scrollport` wrapper. Mirrors
  // the per-frame `scroll` capture in updateBoundingClientRects, but
  // for the single runtime scrollport. Mutation-in-place: zero
  // per-frame allocation. Zeros until Elm has rendered the wrapper.
  function updatePageScroll(inputs) {
    const el = document.getElementById("play-scrollport");
    const s = inputs.pageScroll;
    if (el) {
      s.top = el.scrollTop;
      s.left = el.scrollLeft;
      s.contentWidth = el.scrollWidth;
      s.contentHeight = el.scrollHeight;
      s.viewportWidth = el.clientWidth;
      s.viewportHeight = el.clientHeight;
    } else {
      s.top = 0;
      s.left = 0;
      s.contentWidth = 0;
      s.contentHeight = 0;
      s.viewportWidth = 0;
      s.viewportHeight = 0;
    }
  }

  /*
    listen to events and update the inputs
  */
  window.addEventListener("keydown", (e) => {
    inputs.keyboard.downs.push(e.code);
    if (!inputs.keyboard.pressedKeys.includes(e.code)) {
      inputs.keyboard.pressedKeys.push(e.code);
    }

    if (isCtrlKey(e)) {
      inputs.keyboard.ctrl = true;
    }

    if (isMetaKey(e)) {
      inputs.keyboard.meta = true;
    }

    if (isAltKey(e)) {
      inputs.keyboard.alt = true;
    }

    if (isShiftKey(e)) {
      inputs.keyboard.shift = true;
    }

    if (isArrowLeftKey(e)) {
      inputs.keyboard.left = true;
    }

    if (isArrowRightKey(e)) {
      inputs.keyboard.right = true;
    }

    if (isArrowUpKey(e)) {
      inputs.keyboard.up = true;
    }

    if (isArrowDownKey(e)) {
      inputs.keyboard.down = true;
    }
  });

  window.addEventListener("keyup", (e) => {
    inputs.keyboard.pressedKeys = inputs.keyboard.pressedKeys.filter(
      (code) => code !== e.code
    );

    if (isCtrlKey(e)) {
      inputs.keyboard.ctrl = false;
    }

    if (isMetaKey(e)) {
      inputs.keyboard.meta = false;

      // On macOS, keyup events for non-modifier keys don't fire while Cmd is held.
      // Clear non-modifier states to prevent stuck keys.
      const modifierCodes = [
        "ControlLeft",
        "ControlRight",
        "MetaLeft",
        "MetaRight",
        "AltLeft",
        "AltRight",
        "ShiftLeft",
        "ShiftRight",
      ];
      inputs.keyboard.pressedKeys = inputs.keyboard.pressedKeys.filter((code) =>
        modifierCodes.includes(code)
      );
      inputs.keyboard.left = false;
      inputs.keyboard.right = false;
      inputs.keyboard.up = false;
      inputs.keyboard.down = false;
    }

    if (isAltKey(e)) {
      inputs.keyboard.alt = false;
    }

    if (isShiftKey(e)) {
      inputs.keyboard.shift = false;
    }

    if (isArrowLeftKey(e)) {
      inputs.keyboard.left = false;
    }

    if (isArrowRightKey(e)) {
      inputs.keyboard.right = false;
    }

    if (isArrowUpKey(e)) {
      inputs.keyboard.up = false;
    }

    if (isArrowDownKey(e)) {
      inputs.keyboard.down = false;
    }
  });

  function findRegisteredPaneAncestor(start) {
    const panes = getRegisteredPaneElements();
    if (panes.length === 0) return null;
    const paneSet = new Set();
    for (const [, paneEl] of panes) paneSet.add(paneEl);
    let el = start;
    while (el && el !== document.body) {
      if (paneSet.has(el)) return el;
      el = el.parentElement;
    }
    return null;
  }

  // Window-centered, Y-up CSS pixels from a pointer/touch event. Uses
  // clientX/clientY (viewport-relative), NOT pageX/pageY: the Play canvas is
  // position:fixed and so ignores document scroll, but iOS Safari/WKWebView
  // leave a phantom window scroll under it while the URL bar / visual viewport
  // settle on first paint and after rotation (cf. WebKit 170595, the related
  // WKWebView innerWidth/innerHeight instability in the same settle window).
  // pageY folds
  // that scroll in as a constant vertical touch offset (the long-standing
  // "touches land ~2 cm too low" bug); clientY is scroll-immune and matches
  // where a position:fixed element actually paints. Equals the old pageX/pageY
  // mapping whenever window scroll is 0 (desktop, Android, steady state), so
  // this is a no-op everywhere except the iOS-buggy frames.
  function eventCenteredXY(e) {
    return {
      x: -0.5 * inputs.screen.width + e.clientX,
      y: 0.5 * inputs.screen.height - e.clientY,
    };
  }

  function upsertTouch(e) {
    const position = eventCenteredXY(e);
    const existing = inputs.touches.find((t) => t.id === e.pointerId);
    if (existing) {
      existing.x = position.x;
      existing.y = position.y;
    } else {
      inputs.touches.push({ id: e.pointerId, x: position.x, y: position.y });
    }
  }

  // Update-only, never insert: a hovering mouse must not appear in
  // `touches`.
  function updateTouch(e) {
    const touch = inputs.touches.find((t) => t.id === e.pointerId);
    if (touch) {
      const position = eventCenteredXY(e);
      touch.x = position.x;
      touch.y = position.y;
    }
  }

  function removeTouch(e) {
    const index = inputs.touches.findIndex((t) => t.id === e.pointerId);
    if (index !== -1) inputs.touches.splice(index, 1);
  }

  window.addEventListener("pointerdown", (e) => {
    const p = eventCenteredXY(e);
    inputs.pointer.x = p.x;
    inputs.pointer.y = p.y;
    inputs.pointer.dx += e.movementX;
    inputs.pointer.dy += -e.movementY;

    if (isLeftMouseButton(e)) {
      inputs.pointer.down = true;
      inputs.pointer.isDown = true;
      inputs.pointer.elementIdsForLastDown = (() => {
        let ids = [];
        let element = e.target;
        while (element && element !== document.body) {
          ids.push(element.id || ""); // Push empty string if element has no id
          element = element.parentElement;
        }
        return ids;
      })();
      upsertTouch(e);
    }
    if (isRightMouseButton(e)) {
      inputs.pointer.rightDown = true;
    }

    // Pointer capture, opt-in. Canvas drags (3D camera, BallGame,
    // PolyhedRoll, etc.) need pointermove/pointerup to keep firing
    // when the cursor leaves the canvas — even outside the window.
    // Other widgets that need the same can mark themselves (or an
    // ancestor) with `data-pointer-capture`. Plain DOM (text, buttons,
    // panel handles) falls through to the browser's defaults, where
    // window-level pointer listeners in this file already track the
    // cursor and native text-selection extends across siblings + scrolls
    // — capturing on a text node pins selection to that node and breaks
    // both cross-element drag-select and scroll-driven selection.
    const captureTarget =
      e.target.tagName === "CANVAS"
        ? e.target
        : e.target.closest && e.target.closest("[data-pointer-capture]");
    if (
      captureTarget &&
      findRegisteredPaneAncestor(captureTarget) &&
      typeof captureTarget.setPointerCapture === "function"
    ) {
      try {
        captureTarget.setPointerCapture(e.pointerId);
      } catch (err) {
        // Benign: InvalidStateError fires for stale/inactive pointers
        // (e.g. synthetic re-dispatch); NotFoundError for unknown
        // pointerIds. Drag continuation just falls back to the
        // browser's implicit-capture path. Anything else is unexpected.
        if (err.name !== "InvalidStateError" && err.name !== "NotFoundError") {
          console.warn("setPointerCapture unexpected error:", err);
        }
      }
    }
  });

  window.addEventListener("pointermove", (e) => {
    inputs.pointer.move = true;
    const p = eventCenteredXY(e);
    inputs.pointer.x = p.x;
    inputs.pointer.y = p.y;
    inputs.pointer.dx += e.movementX;
    inputs.pointer.dy += -e.movementY;
    updateTouch(e);
  });

  window.addEventListener("pointerup", (e) => {
    // Capture the release position, like pointerdown/move do. The pointer can
    // travel between the last pointermove and the release (most visibly on a
    // fast stroke), so a consumer that samples position on the up-tick — e.g.
    // committing the final point of an ink stroke — would otherwise record the
    // stale last-move position, ending short of the lift point.
    const p = eventCenteredXY(e);
    inputs.pointer.x = p.x;
    inputs.pointer.y = p.y;
    if (isLeftMouseButton(e)) {
      inputs.pointer.up = true;
      inputs.pointer.isDown = false;
    }
    if (isRightMouseButton(e)) {
      inputs.pointer.rightUp = true;
    }
  });

  window.addEventListener("pointercancel", (e) => {
    // Same release-position capture as pointerup (a cancel also ends the contact).
    const p = eventCenteredXY(e);
    inputs.pointer.x = p.x;
    inputs.pointer.y = p.y;
    if (isLeftMouseButton(e)) {
      inputs.pointer.up = true;
      inputs.pointer.isDown = false;
    }
    if (isRightMouseButton(e)) {
      inputs.pointer.rightUp = true;
    }
  });

  // Raw pointer: the same events, captured at the window before any
  // bubble-phase `stopPropagation`. A press inside guarded chrome
  // reaches these listeners even though it never reaches the
  // `pointer` listeners above. Position is tracked so a drag started
  // on a guarded handle can follow the cursor.
  window.addEventListener(
    "pointerdown",
    (e) => {
      if (!isLeftMouseButton(e)) return;
      const p = eventCenteredXY(e);
      inputs.rawPointer.x = p.x;
      inputs.rawPointer.y = p.y;
      inputs.rawPointer.down = true;
      inputs.rawPointer.isDown = true;
      inputs.rawPointer.elementIdsForLastDown = (() => {
        let ids = [];
        let element = e.target;
        while (element && element !== document.body) {
          ids.push(element.id || "");
          element = element.parentElement;
        }
        return ids;
      })();
    },
    true
  );

  window.addEventListener(
    "pointermove",
    (e) => {
      inputs.rawPointer.move = true;
      const p = eventCenteredXY(e);
      inputs.rawPointer.x = p.x;
      inputs.rawPointer.y = p.y;
    },
    true
  );

  const rawPointerRelease = (e) => {
    // Capture phase, before any bubble-phase `stopPropagation`: a contact
    // released over guarded chrome must still leave `touches`. `pointerup`
    // only fires when the last button releases, so removal by id needs no
    // button check.
    removeTouch(e);
    // Capture the release position, symmetric with the raw down/move handlers,
    // so a drag started on a guarded handle ends at the true release point.
    const p = eventCenteredXY(e);
    inputs.rawPointer.x = p.x;
    inputs.rawPointer.y = p.y;
    if (isLeftMouseButton(e)) {
      inputs.rawPointer.up = true;
      inputs.rawPointer.isDown = false;
    }
  };
  window.addEventListener("pointerup", rawPointerRelease, true);
  window.addEventListener("pointercancel", rawPointerRelease, true);

  window.addEventListener("dblclick", (e) => {
    inputs.pointer.doubleClick = true;
  });

  window.addEventListener(
    "wheel",
    (e) => {
      // Record the target chain for every wheel event (including the
      // synthesized ctrl+wheel that Chrome emits for trackpad pinch), so
      // PanAndZoom's `canvasId` gate works for pinch too.
      inputs.wheel.elementIdsForLastWheel = (() => {
        let ids = [];
        let element = e.target;
        while (element && element !== document.body) {
          ids.push(element.id || ""); // Push empty string if element has no id
          element = element.parentElement;
        }
        return ids;
      })();

      if (e.ctrlKey && !inputs.keyboard.ctrl) {
        // CTRL is pressed but not pressed, the (awkward) way Chrome gets the pinch-gesture
        e.preventDefault();
        inputs.wheel.pinchDeltaForChrome += e.deltaY;
      } else {
        inputs.wheel.deltaX += e.deltaX;
        inputs.wheel.deltaY += e.deltaY;
      }
    },
    { passive: false }
  );

  window.addEventListener("blur", (e) => {
    resetStates(inputs);
  });

  window.addEventListener("focus", (e) => {
    resetStates(inputs);
  });

  window.addEventListener("visibilitychange", (e) => {
    resetStates(inputs);
  });

  window.addEventListener("resize", () => {
    inputs.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    inputs.devicePixelRatio = window.devicePixelRatio;
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      inputs.darkModeIsOn = e.matches;
    });

  /*
    Device orientation (gyroscope) + screen rotation angle. Snapshot-style
    like pointer/wheel — the ~60 Hz events overwrite fields in place; Elm
    reads the latest once per rAF, so there is no per-event Msg (no flood).
    Only a reading with real beta+gamma is published; a sensorless all-null
    event stays null. Interpreted by the Tilt package.
  */
  window.addEventListener("deviceorientation", (e) => {
    if (e.beta === null || e.gamma === null) {
      inputs.deviceOrientation = null;
      return;
    }
    inputs.deviceOrientation = { alpha: e.alpha ?? 0, beta: e.beta, gamma: e.gamma };
  });

  const readScreenAngle = () => {
    inputs.screenOrientationAngle =
      (screen.orientation && screen.orientation.angle) || 0;
  };
  window.addEventListener("orientationchange", readScreenAngle);
  if (screen.orientation) {
    screen.orientation.addEventListener("change", readScreenAngle);
  }

  /*
    iOS 13+ requires DeviceOrientationEvent.requestPermission() from a REAL
    user gesture. A capture-phase click on any [data-play-request-orientation]
    element fires it synchronously (gesture preserved). No-op where the API is
    absent (Android/desktop). Pages show such a button via Tilt.needsMotionPermission.
  */
  document.addEventListener(
    "click",
    (e) => {
      const trigger =
        e.target.closest && e.target.closest("[data-play-request-orientation]");
      if (!trigger) return;
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        DeviceOrientationEvent.requestPermission().catch(() => {});
      }
    },
    true
  );

  /*
    Asset port handlers — texture path is fetch + Image.decode();
    sound path delegates to sound-shim.js (Howler-backed). Wire keys
    differ by kind: texture is page-global ("texture:<id>"), sound is
    per-instance ("sound:<instanceId>:<id>"). See multipage spec §4.4.
  */
  const assetsCache = new Map();
  const assetsControllers = new Map();

  /*
    Concurrency-limited queue for asset fetches. Without this, a page that
    declares hundreds of atlases triggers as many simultaneous fetches; on
    Chrome (and most browsers) the per-tab socket pool runs out and image
    requests fail with ERR_INSUFFICIENT_RESOURCES, which surfaces in Elm
    as `Failed` for atlases that are otherwise fine. The limit is set so
    the steady-state pipeline saturates without overwhelming the pool.
  */
  const ASSET_CONCURRENCY = 8;
  const assetQueue = [];
  let assetActive = 0;
  function pumpAssetQueue() {
    while (assetActive < ASSET_CONCURRENCY && assetQueue.length > 0) {
      const work = assetQueue.shift();
      assetActive++;
      Promise.resolve()
        .then(work)
        .finally(() => {
          assetActive--;
          pumpAssetQueue();
        });
    }
  }
  function enqueueAssetLoad(work) {
    return new Promise((resolve, reject) => {
      assetQueue.push(() => Promise.resolve().then(work).then(resolve, reject));
      pumpAssetQueue();
    });
  }

  function wireKey(kind, id, instanceId) {
    if (kind === "sound") {
      return soundWireKey(instanceId, id);
    }
    return `${kind}:${id}`;
  }

  function sendAssetResponse(payload) {
    app.ports?.assetsResponse?.send?.(payload);
  }

  function freeAssetEntry(entry) {
    // Texture and atlas: revoke every per-mip variant's blob URL.
    if (entry?.mipImages) {
      for (const img of Object.values(entry.mipImages)) {
        const mipSrc = img?.src;
        if (typeof mipSrc === "string" && mipSrc.startsWith("blob:")) {
          URL.revokeObjectURL(mipSrc);
        }
      }
    }
    // Sound: unload Howl frees its AudioBuffer + removes from Howler pool.
    if (entry?.howl) entry.howl.unload();
  }

  /*
    Insert "@<scale>x" before the extension of `url` for mip variant
    derivation. "art/hero.png" + 0.5 → "art/hero@0.5x.png". A
    query/hash suffix is preserved verbatim — "art/hero.png?v=2" →
    "art/hero@0.5x.png?v=2". URLs without a path extension get the
    suffix appended before the query/hash.
  */
  function deriveMipUrl(url, scale) {
    const qIdx = url.indexOf("?");
    const hIdx = url.indexOf("#");
    const tailStart =
      qIdx === -1 ? hIdx : hIdx === -1 ? qIdx : Math.min(qIdx, hIdx);
    const path = tailStart === -1 ? url : url.slice(0, tailStart);
    const tail = tailStart === -1 ? "" : url.slice(tailStart);
    const dot = path.lastIndexOf(".");
    const slash = path.lastIndexOf("/");
    if (dot <= slash) {
      return `${path}@${scale}x${tail}`;
    }
    return `${path.slice(0, dot)}@${scale}x${path.slice(dot)}${tail}`;
  }

  /*
    fetchTexture: URL × number[] -> {
      mipImages: Record<scaleStr, HTMLImageElement>,
      mipUrls:   Record<scaleStr, string>,
      baseWidth: number,
      baseHeight: number,
      pixelated: boolean,
    }

    Always fetches the base ("1") variant. If `mips` is non-empty, also
    fetches each derived "@<scale>x" sibling URL atomically — any single
    failure fails the whole texture (Promise.all rejection arm revokes
    every blob URL that successfully decoded before the failure, then
    re-throws). Mirrors fetchAtlas's atomic-load semantics.

    `baseWidth` / `baseHeight` are the natural pixel dimensions of the
    base image — `play-render`'s `Mip.lower` uses them as the divisor
    for the per-leaf ideal-scale calculation.

    `mipUrls` carries the per-mip blob URL alongside the decoded image.
    The 3D backend feeds the URL into `Scene3d.Material.load`; 2D
    consumers don't need it. Same key set as `mipImages`.

    Standalone textures default `pixelated = true` (matches project
    pixel-art convention; atlases override via the manifest's
    `pixelated` field).
  */
  function fetchTexture(url, controller, mips) {
    const declaredMips = Array.isArray(mips) ? mips : [];
    const variantSpecs = [{ scale: 1, imageUrl: url }];
    for (const scale of declaredMips) {
      if (typeof scale !== "number" || !(scale > 0)) {
        return Promise.reject(
          new Error(`texture mips: invalid scale ${JSON.stringify(scale)}`)
        );
      }
      variantSpecs.push({ scale, imageUrl: deriveMipUrl(url, scale) });
    }

    const createdBlobUrls = [];
    return Promise.all(
      variantSpecs.map((v) =>
        fetch(v.imageUrl, { signal: controller.signal })
          .then((r) => {
            if (!r.ok) throw new Error(`HTTP ${r.status} for ${v.imageUrl}`);
            return r.blob();
          })
          .then((blob) => {
            const img = new Image();
            const blobUrl = URL.createObjectURL(blob);
            createdBlobUrls.push(blobUrl);
            img.src = blobUrl;
            return img
              .decode()
              .then(() => ({ scale: v.scale, image: img, url: blobUrl }));
          })
      )
    ).then(
      (variants) => {
        const mipImages = {};
        const mipUrls = {};
        let baseImage = null;
        for (const v of variants) {
          mipImages[String(v.scale)] = v.image;
          mipUrls[String(v.scale)] = v.url;
          if (v.scale === 1) baseImage = v.image;
        }
        return {
          mipImages,
          mipUrls,
          baseWidth: baseImage?.naturalWidth ?? 0,
          baseHeight: baseImage?.naturalHeight ?? 0,
          pixelated: true,
        };
      },
      (err) => {
        for (const u of createdBlobUrls) URL.revokeObjectURL(u);
        throw err;
      }
    );
  }

  /*
    fetchAtlas: URL -> {
      mipImages: Record<scaleStr, HTMLImageElement>,
      frames:    Record<scaleStr, Record<frameName, {x,y,w,h}>>,
      pixelated: boolean,
    }

    TexturePacker JSON-Hash subset extraction. Reads frames.<name>.frame.{x,y,w,h}
    and meta.image as the base ("1") variant. If the JSON also has a top-level
    `mips: [{ scale, image, frames }]` (emitted by build-strip-atlases.mjs when
    a manifest declares `mipsDefault` / per-atlas `mips`), each variant is
    fetched + decoded atomically — any single failure fails the whole atlas.
    Atlases with no `mips` key (today's Encampment, hand-written hero.json)
    produce a single-key payload that renders identical to pre-PR-B. See
    docs/specs/planned/sprite-module.md §4 + §8.

    Pack atlases with --no-rotation --no-trim — rotated/trimmed frames render
    with visual artifacts until the v1.2 deferral fires.
  */
  function fetchAtlas(url, controller) {
    return fetch(url, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((atlasJson) => {
        if (!atlasJson?.meta?.image) {
          throw new Error("atlas json: missing meta.image");
        }

        // Extract base frames (TexturePacker JSON-Hash format).
        const baseFrames = {};
        for (const [name, def] of Object.entries(atlasJson.frames ?? {})) {
          const r = def?.frame;
          if (
            typeof r?.x !== "number" ||
            typeof r?.y !== "number" ||
            typeof r?.w !== "number" ||
            typeof r?.h !== "number"
          ) {
            throw new Error(`atlas json: frame ${name}: malformed rect`);
          }
          baseFrames[name] = { x: r.x, y: r.y, w: r.w, h: r.h };
        }

        // `url` may be page-relative ("assets/hero.json"); resolve absolute
        // before using as a base for meta.image and per-variant images.
        const jsonAbsolute = new URL(url, document.baseURI);
        const baseImageUrl = new URL(
          atlasJson.meta.image,
          jsonAbsolute
        ).toString();

        // Variant specs: always start with base @ 1.0, optionally add
        // each declared mip variant. Build script's `mips` entries
        // already carry mip-scaled frame rects (Math.round'd in
        // build-strip-atlases.mjs); we only re-validate shape here.
        const variantSpecs = [
          { scale: 1, imageUrl: baseImageUrl, frames: baseFrames },
        ];
        const mipDecls = Array.isArray(atlasJson.mips) ? atlasJson.mips : [];
        for (const m of mipDecls) {
          if (
            typeof m?.scale !== "number" ||
            typeof m?.image !== "string" ||
            typeof m?.frames !== "object" ||
            m.frames === null
          ) {
            throw new Error(
              `atlas json: invalid mips entry: ${JSON.stringify(m)}`
            );
          }
          const variantFrames = {};
          for (const [name, rect] of Object.entries(m.frames)) {
            const r = rect?.frame ?? rect;
            if (
              typeof r?.x !== "number" ||
              typeof r?.y !== "number" ||
              typeof r?.w !== "number" ||
              typeof r?.h !== "number"
            ) {
              throw new Error(
                `atlas json: mip ${m.scale} frame ${name}: malformed rect`
              );
            }
            variantFrames[name] = { x: r.x, y: r.y, w: r.w, h: r.h };
          }
          variantSpecs.push({
            scale: m.scale,
            imageUrl: new URL(m.image, jsonAbsolute).toString(),
            frames: variantFrames,
          });
        }

        const pixelated = atlasJson.pixelated !== false; // default true

        // Atomic fetch + decode of every variant. Promise.all rejects on
        // any single failure — the two-arg `.then` rejection arm revokes
        // every blob URL that successfully decoded before the failure,
        // then re-throws so the outer `.catch` in the assetsLoadRequest
        // pipeline maps it to a status: "failed" wire message. Without
        // this, partial-success blob URLs would leak on every failed
        // load (compounding on retries).
        const createdBlobUrls = [];
        return Promise.all(
          variantSpecs.map((v) =>
            fetch(v.imageUrl, { signal: controller.signal })
              .then((r) => {
                if (!r.ok)
                  throw new Error(`HTTP ${r.status} for ${v.imageUrl}`);
                return r.blob();
              })
              .then((blob) => {
                const img = new Image();
                const blobUrl = URL.createObjectURL(blob);
                createdBlobUrls.push(blobUrl);
                img.src = blobUrl;
                return img.decode().then(() => ({
                  scale: v.scale,
                  image: img,
                  frames: v.frames,
                }));
              })
          )
        ).then(
          (variants) => {
            const mipImages = {};
            const framesPerMip = {};
            for (const v of variants) {
              const key = String(v.scale);
              mipImages[key] = v.image;
              framesPerMip[key] = v.frames;
            }
            return { mipImages, frames: framesPerMip, pixelated };
          },
          (err) => {
            for (const u of createdBlobUrls) URL.revokeObjectURL(u);
            throw err;
          }
        );
      });
  }

  app.ports?.assetsLoadRequest?.subscribe?.((items) => {
    items.forEach(({ id, url, kind, instanceId, mips }) => {
      if (kind === "sound") {
        soundLoad({ id, url, instanceId }, assetsCache, sendAssetResponse);
        return;
      }

      const key = wireKey(kind, id, instanceId);
      const cached = assetsCache.get(key);

      // `subscribers` tracks every instance that has ever asked for this
      // URL — kept across loaded / loading / failed states. On a retry
      // from `failed`, every previously-failed instance gets the new
      // lifecycle replayed to it; otherwise an instance that fails
      // first would stay stuck `Failed` while a sibling succeeds.
      if (cached && cached.status === "loaded") {
        cached.subscribers.add(instanceId);
        // Re-emit `loading` then `loaded` to the requesting instance so
        // its Elm-side `Computer.assets` Registry first creates the entry
        // (markLoading) and then transitions it to Loaded (markTextureLoaded
        // etc., which no-op if the entry is absent). Per [[play-multipage]]
        // §4.6: a duplicate Assets.load from a second instance must NOT
        // silently no-op; the network fetch is shared (one) but every
        // requesting instance's Registry must be notified.
        sendAssetResponse({ id, kind, instanceId, status: "loading" });
        sendAssetResponse({ ...cached, subscribers: undefined, instanceId });
        return;
      }

      if (cached && cached.status === "loading") {
        // In-flight: another instance has already kicked off this fetch.
        // Wait for it instead of aborting + restarting (which would lose
        // the first instance's load). Per [[play-multipage]] §4.6 the
        // fetch is shared; every requester gets a per-instance response
        // when the shared fetch resolves.
        cached.subscribers.add(instanceId);
        sendAssetResponse({ id, kind, instanceId, status: "loading" });
        return;
      }

      // Either no cache entry (first request) or `failed` (retry).
      // For the retry case, carry forward the previously-failed
      // subscribers so they receive the new outcome too.
      const subscribers = cached?.subscribers ?? new Set();
      subscribers.add(instanceId);

      const controller = new AbortController();
      assetsControllers.set(key, controller);
      assetsCache.set(key, { kind, id, status: "loading", subscribers });
      // Notify every subscriber (including any previously-failed ones
      // who are getting the retry replay).
      for (const subId of subscribers) {
        sendAssetResponse({ id, kind, instanceId: subId, status: "loading" });
      }

      const pipeline = enqueueAssetLoad(() =>
        kind === "atlas"
          ? fetchAtlas(url, controller)
          : fetchTexture(url, controller, mips)
      );

      pipeline
        .then((payload) => {
          // payload is { mipImages, baseWidth, baseHeight, pixelated } for
          // texture, { mipImages, frames, pixelated } for atlas.
          // If the load was cancelled mid-decode (after fetch resolved but
          // before decode finished), abandon the decoded image(s) — the
          // controller's signal is only checked in fetch(); decode runs
          // unconditionally, so we must check explicitly here. Without this
          // the cache entry would silently resurrect with a blob URL that
          // has no path to revocation, leaking memory and serving stale
          // content to siblings.
          if (controller.signal.aborted) {
            if (payload?.mipImages) {
              for (const img of Object.values(payload.mipImages)) {
                const mipSrc = img?.src;
                if (typeof mipSrc === "string" && mipSrc.startsWith("blob:")) {
                  URL.revokeObjectURL(mipSrc);
                }
              }
            }
            return;
          }
          const inFlight = assetsCache.get(key);
          const subs = inFlight?.subscribers ?? new Set([instanceId]);
          assetsCache.set(key, {
            kind,
            id,
            status: "loaded",
            subscribers: subs,
            ...payload,
          });
          assetsControllers.delete(key);
          for (const subId of subs) {
            sendAssetResponse({
              id,
              kind,
              instanceId: subId,
              status: "loaded",
              ...payload,
            });
          }
        })
        .catch((err) => {
          if (err && err.name === "AbortError") return;
          const inFlight = assetsCache.get(key);
          const subs = inFlight?.subscribers ?? new Set([instanceId]);
          assetsCache.set(key, {
            kind,
            id,
            status: "failed",
            subscribers: subs,
          });
          assetsControllers.delete(key);
          for (const subId of subs) {
            sendAssetResponse({
              id,
              kind,
              instanceId: subId,
              status: "failed",
              error: String(err?.message ?? err),
            });
          }
        });
    });
  });

  app.ports?.assetsUnload?.subscribe?.((items) => {
    items.forEach(({ id, kind, instanceId }) => {
      if (kind === "sound") {
        soundUnload({ id, instanceId }, assetsCache, sendAssetResponse);
        return;
      }

      const key = wireKey(kind, id, instanceId);
      const controller = assetsControllers.get(key);
      if (controller) {
        controller.abort();
        assetsControllers.delete(key);
      }
      freeAssetEntry(assetsCache.get(key));
      assetsCache.delete(key);
      sendAssetResponse({ id, kind, instanceId, status: "unloaded" });
    });
  });

  app.ports?.assetsCancel?.subscribe?.((items) => {
    items.forEach(({ id, kind, instanceId }) => {
      if (kind === "sound") {
        soundCancel({ id, instanceId }, assetsCache, sendAssetResponse);
        return;
      }

      const key = wireKey(kind, id, instanceId);
      const controller = assetsControllers.get(key);
      if (!controller) {
        // Not in flight — nothing to cancel; no echo.
        return;
      }
      controller.abort();
      assetsControllers.delete(key);
      freeAssetEntry(assetsCache.get(key));
      assetsCache.delete(key);
      sendAssetResponse({ id, kind, instanceId, status: "cancelled" });
    });
  });

  // Per-frame profiler scalars. Routed to performance.mark with the 'a:'
  // prefix so the profiler-element worker observes them on the same channel
  // as label start/end marks. Idle cost when no profiler is recording: one
  // performance.mark call (~1 µs); the browser's mark buffer self-bounds.
  // Validate at the port boundary — closer to the source than the worker.
  app.ports?.profileScalar?.subscribe?.(({ name, value }) => {
    if (typeof name !== "string" || name.length === 0 || name.includes(":")) {
      console.warn("[Profiler] invalid scalar name:", name);
      return;
    }
    if (typeof value !== "number" || !Number.isFinite(value)) {
      console.warn("[Profiler] invalid scalar value for", name, ":", value);
      return;
    }
    performance.mark("a:" + name, { detail: { value } });
  });

  // URL-param writer. Fired by Play.update on every configuration /
  // panel-position change. The list is the COMPLETE diff from initial
  // defaults — we just replace the URL's search string verbatim.
  // history.replaceState doesn't navigate, so this is cheap to call on
  // every slider tick. Reset uses pushUrlReset below (pushState) so
  // its destruction is reversible via the browser Back button.
  app.ports?.writeUrlParams?.subscribe?.((pairs) => {
    try {
      const params = new URLSearchParams();
      for (const [key, value] of pairs) {
        params.set(key, value);
      }
      const query = params.toString();
      const newUrl =
        window.location.pathname +
        (query ? "?" + query : "") +
        window.location.hash;
      window.history.replaceState(null, "", newUrl);
    } catch (e) {
      // History API throws in some sandboxed contexts (about:blank,
      // file://). A malformed `pairs` payload from Elm would also land
      // here. Warn so a broken-port regression surfaces in DevTools
      // instead of disappearing into a silent no-op.
      console.warn("[play] writeUrlParams failed", e);
    }
  });

  // Reset-URL writer. Fired when the user presses Reset Configurations.
  // Uses history.pushState (not replaceState) so the previous URL state
  // remains in browser history and the user can Back-undo the reset.
  app.ports?.pushUrlReset?.subscribe?.(() => {
    try {
      const newUrl = window.location.pathname + window.location.hash;
      window.history.pushState(null, "", newUrl);
    } catch (e) {
      console.warn("[play] pushUrlReset failed", e);
    }
  });

  // Generic personal-chrome writer. Fired by Play's reconcileChrome after any
  // update whose serialised chrome snapshot drifted. JS stores the value
  // verbatim; each Elm consumer owns its encoding.
  app.ports?.setLocalStorage?.subscribe?.(({ key, value }) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("[play] setLocalStorage failed", key, e);
    }
  });

  // Reset Play's Interface. Remove every play:* personal-chrome key (mirrors
  // the read filter in `inputs.persisted` above), then reload so the
  // now-empty store re-hydrates to the page's coded defaults. The reload is
  // required: reconcileChrome rewrites the chrome snapshot after every
  // update, so clearing without reloading is instantly undone.
  app.ports?.clearPlayLocalStorage?.subscribe?.(() => {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith("play:")) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
      // Reload only after a successful clear, so a storage failure (private
      // mode / disabled storage) isn't masked by a fake-success reload into
      // the unchanged state. When storage is unavailable nothing was ever
      // persisted, so the interface is already at its coded defaults anyway.
      window.location.reload();
    } catch (e) {
      console.warn("[play] clearPlayLocalStorage failed", e);
    }
  });

  // popstate fires when the user navigates via browser Back / Forward
  // (or programmatic history.back/.forward) over an entry we previously
  // pushed via pushUrlReset. Elm reads URL params only at init via
  // flags, so we reload to make the new URL state take effect.
  window.addEventListener("popstate", () => {
    window.location.reload();
  });

  // Sound playback + multipage audio gating ports.
  setupSoundShim(app, assetsCache);

  // Multipage IntersectionObserver — registers each instance's pane on
  // `registerPanes` Cmd, sends per-instance `visibilityChanged` Sub on
  // viewport intersection transitions. No-op for standalone Play pages
  // (the port is dead-code-eliminated under --optimize).
  setupIntersectionObserver(app);

  /*
      And lastly, the animation frame loop where we
        - compute dt and send inputs to the elm app, and
        - reset the actions to get the inputs ready for the next tick.

      We only send `dt` (the time delta), not an absolute clock.
      The Elm side accumulates its own clock by summing dt values.
      This is intentional: the Tape system can pause and resume recording,
      and accumulating dt ensures the clock continues seamlessly after a pause.
      If we sent an absolute timestamp, the clock would jump by the pause duration.

      We also cap dt to avoid large jumps when the browser tab loses focus and regains it.
      When a tab is not visible, requestAnimationFrame stops firing, so the first frame
      after regaining focus would have a dt equal to the entire inactive duration.
  */
  let previousTimeStamp = 0;
  window.requestAnimationFrame(tick);
  function tick(timeStamp) {
    const rawDt = (timeStamp - previousTimeStamp) / 1000;
    inputs.dt = Math.min(rawDt, 0.1);
    previousTimeStamp = timeStamp;

    // update boundingClientRects
    performance.mark("measure-start");
    updateBoundingClientRects(inputs);
    performance.mark("measure-end");
    performance.clearMeasures("updateBoundingClientRects");
    performance.measure(
      "updateBoundingClientRects",
      "measure-start",
      "measure-end"
    );

    updatePaneBoundingBoxes(inputs);
    updatePageScroll(inputs);

    // log here for debugging purposes:
    // console.log("yeeeey", inputs);

    // Check if the focused element is a text input
    const active = document.activeElement;
    const activeIsContentEditable = active != null && active.isContentEditable;
    inputs.focusedElementIsTextInput =
      active != null &&
      (active.tagName === "TEXTAREA" ||
        (active.tagName === "INPUT" &&
          textInputTypes.has((active.type || "text").toLowerCase())) ||
        activeIsContentEditable);
    // A richer view of the same focus check: is the focused editable a
    // contenteditable surface (e.g. a CodeMirror editor) rather than a plain
    // <input>/<textarea>? Consumers that route editor commands use this to tell
    // "the editor is focused" from "one of my own form fields is focused".
    inputs.focusedElementIsContentEditable = activeIsContentEditable;

    // Send the `inputs` to elm app
    app.ports?.tick?.send?.(inputs);

    // Same-frame render. The tick above goes through a port (a subscription), so
    // Elm defers its draw to the Browser animator's own rAF — one frame late. A
    // DOM event whose handler sets stopPropagation takes Elm's *synchronous*
    // render path instead (virtual-dom: "stopPropagation implies isSync"), so the
    // draw lands in THIS frame; the redundant animator rAF then no-ops. The
    // runtime root (#play-scrollport) carries the matching
    // `stopPropagationOn "playflush"` handler. Before it mounts, getElementById
    // is null and the `?.` skips the flush (the deferred rAF draws those startup
    // frames). A draw-time throw is reported to window.onerror and ticking
    // continues — `dispatchEvent` reports listener exceptions, it does not rethrow
    // — the same exposure Elm's own unguarded animator draw already has, so no
    // guard is needed. See the `play-same-frame-render` spec under docs/specs/.
    document
      .getElementById("play-scrollport")
      ?.dispatchEvent(new CustomEvent("playflush"));

    // reset actions
    resetActions(inputs);

    // loop
    window.requestAnimationFrame(tick);
  }
};
