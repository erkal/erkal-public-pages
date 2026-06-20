export function afterInit(app) {
  wireLevels(app);
}

// localStorage + share-link bridge for the Levels gallery. The Elm side is
// `Levels.Sync` (ports `levelsIn` / `levelsOut`). Copied from PopUpEditor.
function wireLevels(app) {
  const key = "levels:" + location.pathname;

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

  // Strip `?g=` from the address bar once the shared gallery is in Elm's memory.
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
