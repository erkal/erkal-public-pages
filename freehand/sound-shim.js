// Sound JS shim — backs the Sound module's outgoing ports + handles
// sound-kind asset loading/unloading via Howler.js (vendored sibling).
//
// Howler globals (`window.Howl`, `window.Howler`) are loaded by a
// <script> tag in the HTML template before the Elm bundle, so they're
// available at module-init time. Howler.autoUnlock is on by default
// (v2.1+), so iOS Safari + Capacitor WKWebView audio unlock happens
// automatically on first user gesture — no explicit unlock plumbing.
//
// Per-instance Howl scoping: each (instanceId, rawId) pair backs a
// separate Howl object inside the shared Howler global AudioContext.
// Wire keys use `sound:<instanceId>:<rawId>` so two Play instances
// declaring the same audio URL get independent Howls.
// See docs/specs/planned/sound-module.md §3.

export { setupSoundShim, soundLoad, soundUnload, soundCancel, soundWireKey };

function soundWireKey(instanceId, id) {
  return `sound:${instanceId}:${id}`;
}

// Howler's onloaderror gives a numeric code (HTMLMediaElement.error.code
// or an internal Howler signal). Map to a readable phrase before
// sending to Elm — otherwise the user sees a literal digit.
function howlerErrorPhrase(err) {
  switch (err) {
    case 1:
      return "Aborted";
    case 2:
      return "Network error";
    case 3:
      return "Decode error";
    case 4:
      return "Format not supported";
    default:
      return String(err);
  }
}

function getHowl(assetsCache, instanceId, id) {
  return assetsCache.get(soundWireKey(instanceId, id))?.howl;
}

function* soundsForInstance(assetsCache, instanceId) {
  const prefix = `sound:${instanceId}:`;
  for (const [key, entry] of assetsCache.entries()) {
    if (key.startsWith(prefix)) yield entry;
  }
}

// Wired into input.js's `assetsLoadRequest` / `assetsUnload` /
// `assetsCache` handlers — the `kind === "sound"` branch dispatches
// here so howl-specific lifecycle stays out of input.js.

function soundLoad({ id, url, instanceId }, assetsCache, sendAssetResponse) {
  const key = soundWireKey(instanceId, id);
  const cached = assetsCache.get(key);
  if (cached && cached.status === "loaded") {
    // Idempotent on duplicate load.
    return;
  }

  const howl = new window.Howl({
    src: [url],
    onload: () => {
      const entry = assetsCache.get(key);
      if (entry) entry.status = "loaded";
      sendAssetResponse({ id, kind: "sound", instanceId, status: "loaded" });
    },
    onloaderror: (_soundId, err) => {
      const entry = assetsCache.get(key);
      if (entry) entry.status = "failed";
      sendAssetResponse({
        id,
        kind: "sound",
        instanceId,
        status: "failed",
        error: howlerErrorPhrase(err) + " (" + url + ")",
      });
    },
  });

  assetsCache.set(key, {
    kind: "sound",
    id,
    instanceId,
    status: "loading",
    howl,
  });
  sendAssetResponse({ id, kind: "sound", instanceId, status: "loading" });
}

function soundUnload({ id, instanceId }, assetsCache, sendAssetResponse) {
  const key = soundWireKey(instanceId, id);
  const entry = assetsCache.get(key);
  if (entry?.howl) entry.howl.unload();
  assetsCache.delete(key);
  sendAssetResponse({ id, kind: "sound", instanceId, status: "unloaded" });
}

function soundCancel({ id, instanceId }, assetsCache, sendAssetResponse) {
  // Howler doesn't expose abort; best-effort — call unload (which
  // stops + frees the buffer once it lands) and drop the cache entry.
  const key = soundWireKey(instanceId, id);
  const entry = assetsCache.get(key);
  if (!entry) return; // nothing in flight for this key
  if (entry.howl) entry.howl.unload();
  assetsCache.delete(key);
  sendAssetResponse({ id, kind: "sound", instanceId, status: "cancelled" });
}

// Call once after Elm app init.

function setupSoundShim(app, assetsCache) {
  app.ports?.soundPlay?.subscribe?.(({ id, instanceId }) => {
    const howl = getHowl(assetsCache, instanceId, id);
    if (!howl) return; // not loaded / cancelled / never requested
    howl.play(); // Howler queues internally if still loading
  });

  app.ports?.soundPlayWith?.subscribe?.(
    ({ id, instanceId, volume, loop, fadeInSeconds }) => {
      const howl = getHowl(assetsCache, instanceId, id);
      if (!howl) return;
      const playId = howl.play();
      // Under autoplay-blocked policy, Howler returns a falsy playId
      // and emits a `playerror` event internally. Subsequent
      // loop/volume/fade calls would be silent no-ops, leaving the
      // user with no audio and no diagnostic. Surface as failed.
      if (!playId) {
        sendAssetResponse({
          id,
          kind: "sound",
          instanceId,
          status: "failed",
          error: "Autoplay blocked — wait for a user gesture",
        });
        return;
      }
      howl.loop(loop, playId);
      if (fadeInSeconds > 0) {
        howl.volume(0, playId);
        howl.fade(0, volume, fadeInSeconds * 1000, playId);
      } else {
        howl.volume(volume, playId);
      }
    }
  );

  app.ports?.soundStop?.subscribe?.(({ id, instanceId }) => {
    const howl = getHowl(assetsCache, instanceId, id);
    if (howl) howl.stop();
  });

  app.ports?.soundStopAll?.subscribe?.(({ instanceId }) => {
    for (const entry of soundsForInstance(assetsCache, instanceId)) {
      entry.howl?.stop();
    }
  });

  app.ports?.setInstanceMuted?.subscribe?.(({ instanceId, muted }) => {
    for (const entry of soundsForInstance(assetsCache, instanceId)) {
      entry.howl?.mute(muted);
    }
  });
}
