// packages/katex/katex-shim.js
//
// JS-side runtime for KaTeX-rendered math labels. Imports KaTeX and
// html2canvas dynamically from jsDelivr (pinned versions) on first
// use. Subscribes to the Elm-emitted `katexRequests` port; for each
// label, immediately reports `loading` to Play's `assetsResponse`
// port (so Registry transitions the entry to Loading), then renders
// LaTeX → HTML → canvas → blob URL and reports `loaded` (or
// `failed`) using the same wire shape input.js's fetchTexture path
// uses. From there the entry is indistinguishable from a PNG-loaded
// standalone texture.
//
// We use html2canvas (canvas2d painting) rather than html-to-image
// (SVG foreignObject) because Chrome's image-decode pipeline doesn't
// reliably render foreignObject text glyphs even when fonts are
// embedded as data URIs.
//
// Self-contained: no Play imports, no other shim dependencies. The
// only host requirement is `app.ports.assetsResponse` (declared by
// packages/play-media/src/Assets.elm).

const KATEX_VERSION = "0.16.11";
const HTML2CANVAS_VERSION = "1.4.1";
const DEFAULT_INSTANCE_ID = "play"; // standalone fallback when a request omits instanceId

let depsPromise = null;

function loadDeps() {
  if (!depsPromise) {
    // Clear the cache on rejection so the next call retries. Without
    // this, a single transient CDN hiccup (network blip, jsDelivr
    // 503, ad-blocker) caches the rejected promise for the page
    // lifetime — every subsequent KaTeX.load reuses it and silently
    // marks every label as Failed. Mirror input.js's "loaded |
    // failed" cache transition (input.js:883-886) where a Failed
    // entry can be replaced on a fresh load.
    depsPromise = Promise.all([
      import(`https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/+esm`),
      import(
        `https://cdn.jsdelivr.net/npm/html2canvas@${HTML2CANVAS_VERSION}/+esm`
      ),
      injectKatexStyles(),
    ]).catch((err) => {
      depsPromise = null;
      throw err;
    });
  }
  return depsPromise;
}

// Fetch KaTeX's stylesheet as text and inject it as a same-origin
// <style> block. html2canvas inlines stylesheets into a cloned
// document by reading `<link>.sheet.cssRules`; cross-origin sheets
// throw SecurityError on `.cssRules`, so KaTeX's per-class
// `font-family` declarations (`.katex { font-family: KaTeX_Main,
// ... }`) wouldn't make it into the clone and glyph layout would
// degrade to fallback fonts. Fetching the CSS as text and injecting
// it as a same-origin <style> sidesteps the SecurityError.
async function injectKatexStyles() {
  const cssUrl = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css`;
  const response = await fetch(cssUrl);
  if (!response.ok) {
    throw new Error(`failed to fetch KaTeX CSS: HTTP ${response.status}`);
  }
  const css = await response.text();
  // The KaTeX CSS uses relative `fonts/` paths in its @font-face
  // declarations. When we inline the CSS at the page origin those
  // would resolve to /<page>/fonts/... and 404. Rewrite to absolute
  // jsDelivr URLs.
  const fontBase = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/fonts/`;
  const cssWithAbsoluteFonts = css.replace(
    /url\((['"]?)fonts\//g,
    (_, q) => `url(${q}${fontBase}`
  );
  const style = document.createElement("style");
  style.textContent = cssWithAbsoluteFonts;
  document.head.appendChild(style);
}

async function rasterize({ id, latex, color, fontSize }) {
  const [katexMod, html2canvasMod] = await loadDeps();
  const katex = katexMod.default;
  const html2canvas = html2canvasMod.default;

  // Force-load every KaTeX font face. KaTeX's @font-face declarations
  // sit dormant until a glyph using them is laid out; on the first
  // equation, the math face hasn't been requested yet, so
  // `document.fonts.ready` (and the `documentClone.fonts.ready`
  // html2canvas awaits internally) resolves before they're available.
  // Calling `font.load()` per face puts them in the FontFaceSet so
  // subsequent `fonts.ready` actually waits for them.
  await Promise.all(
    Array.from(document.fonts)
      .filter((f) => f.family.startsWith("KaTeX_"))
      .map((f) => f.load())
  );

  const html = katex.renderToString(latex, {
    throwOnError: false,
    output: "html",
  });

  // The element must stay in normal layout so the browser computes
  // styles for it (KaTeX's per-class font-family rules need to apply
  // before html2canvas reads the DOM). `transform: translate(...)`
  // shifts it off-viewport visually without removing it from layout.
  const node = document.createElement("div");
  Object.assign(node.style, {
    position: "fixed",
    top: "0",
    left: "0",
    transform: "translate(-99999px, -99999px)",
    color,
    fontSize: `${fontSize}px`,
    whiteSpace: "nowrap",
    pointerEvents: "none",
  });
  node.innerHTML = html;
  document.body.appendChild(node);

  try {
    await document.fonts.ready;
    // Rasterize at 2× device-pixel scale (supersampling) so the
    // texture stays crisp on retina displays even when the billboard
    // is magnified beyond its natural pixel size. html2canvas
    // defaults to CSS pixels; we multiply DPR by SUPERSAMPLE so the
    // GPU's bilinear filter averages down to clean screen pixels
    // instead of stretching a smaller bitmap. Cost: SUPERSAMPLE² ×
    // memory and rasterize time per label — fine for tens of labels,
    // expensive for hundreds.
    const SUPERSAMPLE = 2;
    const canvas = await html2canvas(node, {
      backgroundColor: null,
      scale: SUPERSAMPLE * (window.devicePixelRatio || 1),
      logging: false,
    });
    if (canvas.width === 0 || canvas.height === 0) {
      throw new Error("empty render — LaTeX produced 0×0 output");
    }
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("toBlob returned null"))),
        "image/png"
      );
    });
    // Revoke on decode failure so a malformed blob doesn't leak its
    // URL across the catch boundary. Successful URLs are intentionally
    // not revoked — they must stay valid for Material.load to fetch
    // them on the Elm side (spec §11.2 acknowledges the success-path
    // leak as known and trivial).
    const url = URL.createObjectURL(blob);
    let image;
    try {
      // Build an HTMLImageElement so the Registry can hold a DOM ref —
      // matches TextureEntry.mipImages's Json.Decode.Value convention.
      image = new Image();
      image.src = url;
      await image.decode();
    } catch (err) {
      URL.revokeObjectURL(url);
      throw err;
    }

    return {
      image,
      url,
      baseWidth: canvas.width,
      baseHeight: canvas.height,
      // Naive baseline: canvas midline. KaTeX's actual baseline
      // metric requires reading depth/height from the rendered HTML;
      // not needed until 3D label alignment is end-of-line-precise.
      baseline: canvas.height / 2,
    };
  } finally {
    document.body.removeChild(node);
  }
}

export function wirePorts(app) {
  const reqs = app.ports?.katexRequests;
  const send = app.ports?.assetsResponse?.send;
  if (!reqs || typeof send !== "function") {
    console.warn(
      "[katex-shim] required ports missing on app — skipping wiring"
    );
    return;
  }

  const post = (payload) => app.ports.assetsResponse.send(payload);

  const queue = [];
  let inflight = 0;
  const cap = 4;

  const instanceFor = (item) => item.instanceId || DEFAULT_INSTANCE_ID;

  const pump = () => {
    while (inflight < cap && queue.length) {
      const item = queue.shift();
      inflight++;
      rasterize(item)
        .then((out) => {
          // Forward-compat: mipUrls + baseline are read by Play.Registry
          // post-Phase-A; current decoder treats both as optional and
          // ignores them when not present.
          post({
            kind: "texture",
            status: "loaded",
            instanceId: instanceFor(item),
            id: item.id,
            mipImages: { 1: out.image },
            mipUrls: { 1: out.url },
            baseWidth: out.baseWidth,
            baseHeight: out.baseHeight,
            pixelated: false,
            baseline: out.baseline,
          });
        })
        .catch((e) => {
          console.warn("[katex]", item.id, e);
          post({
            kind: "texture",
            status: "failed",
            instanceId: instanceFor(item),
            id: item.id,
            error: String(e?.message ?? e),
          });
        })
        .finally(() => {
          inflight--;
          pump();
        });
    }
  };

  reqs.subscribe((items) => {
    if (!Array.isArray(items)) return;
    for (const it of items) {
      // Pre-mark Loading so Registry.status is correct while the
      // rasterize is in flight (mirrors input.js's fetchTexture flow).
      post({
        kind: "texture",
        status: "loading",
        instanceId: instanceFor(it),
        id: it.id,
      });
      queue.push(it);
    }
    pump();
  });
}
