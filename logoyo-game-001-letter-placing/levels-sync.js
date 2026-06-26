// localStorage + share-link bridge for the Levels gallery. The Elm side is
// `Levels.Sync` (ports `levelsIn` / `levelsOut`). Each levels-page's
// page-script.js imports `wireLevels` and calls it from `afterInit(app)`.
export function wireLevels(app) {
  const key = "levels:" + location.pathname;

  // Send the one-shot startup payload. Synchronous inside afterInit is fine:
  // Elm registers port subscriptions while building the app, before afterInit
  // runs, so `levelsIn` is already live.
  let stored = null;
  try {
    stored = localStorage.getItem(key);
  } catch (e) {
    console.warn("levels: localStorage read failed", e);
  }

  const urlBlob = new URLSearchParams(location.search).get("g");

  app.ports.levelsIn.send({
    origin: location.origin,
    path: location.pathname,
    urlBlob: urlBlob,
    stored: stored,
  });

  // The shared gallery now lives in Elm's memory, so strip `?g=` from the
  // address bar: a reload then starts from the user's own stored gallery.
  if (urlBlob !== null) {
    const url = new URL(location.href);
    url.searchParams.delete("g");
    history.replaceState({}, "", url);
  }

  app.ports.levelsOut.subscribe((msg) => {
    if (msg.tag === "store") {
      try {
        localStorage.setItem(key, msg.text);
      } catch (e) {
        console.warn("levels: localStorage write failed", e);
      }
    }
    if (msg.tag === "copy") {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(msg.text)
          .catch((e) => console.warn("levels: clipboard write failed", e));
      } else {
        console.warn("levels: clipboard unavailable (insecure context?)");
      }
    }
  });
}
