// packages/ui/katex-element.js
//
// Defines the <katex-element tex="..." display-mode> custom element used
// by UI.Markdown to render inline + display math in markdown text. The
// element lazy-loads KaTeX from jsDelivr (pinned version, matching
// packages/katex/katex-shim.js) on first connect — pages that don't
// instantiate it pay nothing beyond one customElements.define call.
//
// Pre-rendering, the element shows its TeX source as plain text (so
// readers see "θ = π · ψ"-shaped LaTeX before KaTeX finishes loading
// instead of an empty box). On render failure, falls back to red text.
//
// Independent of packages/katex/katex-shim.js — that one rasterizes
// equations to image blobs for SceneWebGL textures via a Play port;
// this one renders inline DOM. They share a KaTeX version constant by
// convention but no code.

(() => {
  const KATEX_VERSION = "0.16.11";

  let katexLoaded = typeof window.katex !== "undefined";
  let katexLoadPromise = null;
  const pendingElements = new Set();

  function ensureKatex() {
    if (katexLoaded) return Promise.resolve();
    if (!katexLoadPromise) {
      const cssPromise = new Promise((resolve) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css`;
        link.onload = resolve;
        link.onerror = resolve;
        document.head.appendChild(link);
      });

      const jsPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js`;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

      katexLoadPromise = Promise.all([cssPromise, jsPromise]).then(() => {
        katexLoaded = true;
        for (const el of pendingElements) {
          if (el.isConnected) el.render();
        }
        pendingElements.clear();
      });
    }
    return katexLoadPromise;
  }

  class KatexElement extends HTMLElement {
    static get observedAttributes() {
      return ["tex", "display-mode"];
    }

    connectedCallback() {
      if (katexLoaded) {
        this.render();
      } else {
        this.textContent = this.getAttribute("tex") || "";
        pendingElements.add(this);
        ensureKatex();
      }
    }

    disconnectedCallback() {
      pendingElements.delete(this);
    }

    attributeChangedCallback() {
      if (this.isConnected) {
        if (katexLoaded) {
          this.render();
        } else {
          this.textContent = this.getAttribute("tex") || "";
        }
      }
    }

    render() {
      if (!katexLoaded) return;

      const tex = this.getAttribute("tex") || "";
      const displayMode = this.hasAttribute("display-mode");

      try {
        this.innerHTML = window.katex.renderToString(tex, {
          displayMode: displayMode,
          throwOnError: false,
          output: "html",
        });
      } catch (e) {
        console.warn("katex-element: rendering failed for TeX:", tex, e);
        this.textContent = tex;
        this.style.color = "red";
        return;
      }

      this.style.color = "";
      this.style.display = displayMode ? "block" : "inline";
      this.style.textAlign = displayMode ? "center" : "";
      this.style.margin = displayMode ? "0.6em 0" : "";
      this.style.overflowX = displayMode ? "auto" : "";
    }
  }

  customElements.define("katex-element", KatexElement);
})();
