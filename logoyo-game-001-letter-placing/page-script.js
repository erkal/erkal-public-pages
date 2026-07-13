// Forwards the game's `gameComplete` port to the React Native WebView host so the Logoyo
// app can advance the parkour when the child taps "next" on a solved puzzle. Harmless on
// the open web: window.ReactNativeWebView is undefined there, so the guarded call is a
// no-op. Host contract (Logoyo app: src/gameHost/README.md): post {type:'complete', result}.
export function afterInit(app) {
  app.ports.gameComplete.subscribe((result) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'complete', result }));
    }
  });
}
