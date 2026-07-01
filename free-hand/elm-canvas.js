// Only run the script on the browser
if (typeof window !== "undefined") {
  if (window["customElements"]) {
    customElements.define(
      "elm-canvas",
      class extends HTMLElement {
        constructor() {
          super();
          this.commands = [];
          this._tiledFillsList = [];
          this.mounted = false;
          // Pattern cache: patternKey → CanvasPattern.
          this._patternCache = new Map();
          // Microtask-coalesced render trigger. Both `set cmds` and
          // `set tiledFills` request a render; whichever fires first in
          // the vdom-patch cycle queues the microtask, the other becomes
          // a no-op. One render per vdom patch regardless of setter
          // order, with no frame lag (microtask runs before next paint).
          this._renderPending = false;
        }

        set cmds(values) {
          this.commands = values;
          this._scheduleRender();
        }

        // Side-channel for LeafTiledImage leaves. Set by Elm via
        // `Html.Attributes.property "tiledFills" json` on the
        // <elm-canvas> element. See SceneCanvas2D.encodeTiledFillFrom for
        // the entry shape.
        set tiledFills(values) {
          this._tiledFillsList = values || [];
          this._scheduleRender();
        }

        _scheduleRender() {
          if (this._renderPending) return;
          this._renderPending = true;
          queueMicrotask(() => {
            this._renderPending = false;
            try {
              this.render();
            } catch (e) {
              // Without context, an in-render throw bubbles to
              // window.onerror with no indication it came from this
              // subsystem; tag it so the source is traceable.
              console.error("[elm-canvas] render failed:", e);
            }
          });
        }

        static get observedAttributes() {
          return ["width", "height"];
        }

        connectedCallback() {
          // Wait for the inner elements to be rendered before using them
          requestAnimationFrame(() => {
            this.canvas = this.querySelector("canvas");
            this.context = this.canvas.getContext("2d");
            this.mounted = true;

            this.setCanvasDimensions();
            this.render();
          });
        }

        attributeChangedCallback(name, oldValue, newValue) {
          if (
            (name === "width" || name === "height") &&
            oldValue !== newValue
          ) {
            // Wait for Elm to finish rendering and setting its stuff before
            // changing the inner canvas dimensions
            requestAnimationFrame(() => {
              this.setCanvasDimensions();
              this.render();
            });
          }
        }

        setCanvasDimensions() {
          if (!this.mounted) return;

          // Get dimensions from the elm-canvas element. If they are not set, try to
          // get them from the canvas element inside (to support elm-canvas@3.0.3)
          var width = Number(
            this.getAttribute("width") || this.canvas.getAttribute("width")
          );
          var height = Number(
            this.getAttribute("height") || this.canvas.getAttribute("height")
          );

          var devicePixelRatio = window.devicePixelRatio || 1;
          this.canvas.style.width = width + "px";
          this.canvas.style.height = height + "px";
          this.canvas.width = width * devicePixelRatio;
          this.canvas.height = height * devicePixelRatio;
          // Reset current transformation matrix to the identity matrix
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          this.context.scale(devicePixelRatio, devicePixelRatio);
        }

        render() {
          if (!this.mounted) return;

          // Profiler boundary — turns the previously inferred
          // ctx.drawImage CPU command-encoding cost into a measured mark
          // in Play.Profiler's flame graph (see
          // packages/play/profiler-element.js for the s:/e: contract).
          performance.mark("s:play-canvas2d:execute");

          // Background pass: paint LeafTiledImage leaves first so any
          // standard leaf composites on top.
          if (this._tiledFillsList.length > 0) {
            this.renderTiledFills();
          }

          // Foreground pass: replay joakin/elm-canvas commands. Iterate
          // in reverse because Elm builds the list by prepending.
          for (let i = this.commands.length - 1; i >= 0; i--) {
            this.execCommand(this.commands[i]);
          }

          performance.mark("e:play-canvas2d:execute");
        }

        renderTiledFills() {
          const ctx = this.context;
          const dpr = window.devicePixelRatio || 1;
          for (const tf of this._tiledFillsList) {
            ctx.save();

            // Reset to DPR-scale identity. setCanvasDimensions installs
            // the DPR scale at mount; subsequent foreground command
            // replay rewrites the matrix. setTransform (vs transform)
            // replaces — required so each tiledFill paints into the
            // same DPR-scaled, untranslated baseline regardless of
            // which leaves last touched the context.
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const pxPerWorld = tf.pxPerWorld;
            const halfW = (tf.worldWidth * pxPerWorld) / 2;
            const halfH = (tf.worldHeight * pxPerWorld) / 2;
            const regionLeft = tf.screenX - halfW;
            const regionTop = tf.screenY - halfH;
            const regionW = halfW * 2;
            const regionH = halfH * 2;

            // Clip to region so the pattern fill never bleeds past world
            // bounds at extreme zoom.
            ctx.beginPath();
            ctx.rect(regionLeft, regionTop, regionW, regionH);
            ctx.clip();

            const pattern = this._getPattern(tf);
            if (pattern) {
              ctx.imageSmoothingEnabled = !tf.pixelated;
              // Texture-Y top → region-screen-top: image-Y=0 already
              // corresponds to canvas-Y top (both are top-down), so no
              // Y-flip is needed. Translate to region center, then scale
              // so one native frame pixel maps to
              // (worldTileSize * pxPerWorld / nativePx) screen pixels.
              ctx.translate(tf.screenX, tf.screenY);
              const sX = (tf.worldTileWidth * pxPerWorld) / tf.frame.w;
              const sY = (tf.worldTileHeight * pxPerWorld) / tf.frame.h;
              ctx.scale(sX, sY);
              ctx.fillStyle = pattern;
              // Fill in pattern-local coords. Each world tile is one
              // frame.w × frame.h pattern unit. Region is worldWidth ×
              // worldHeight tiles, centered on local (0, 0).
              const fillW = tf.worldWidth * tf.frame.w;
              const fillH = tf.worldHeight * tf.frame.h;
              ctx.fillRect(-fillW / 2, -fillH / 2, fillW, fillH);
            } else {
              // Always-render fallback: paint surface.color while the
              // atlas is loading or on resolve failure (textured-surface
              // §8 contract).
              ctx.fillStyle = tf.fallbackColor;
              ctx.fillRect(regionLeft, regionTop, regionW, regionH);
            }

            ctx.restore();
          }
        }

        // CanvasPattern for a tiled-fill entry, or null if the atlas
        // isn't loaded yet OR if extraction failed. Builds on first
        // sight per patternKey: extracts the atlas frame into a small
        // offscreen canvas (without this, createPattern on the atlas
        // would repeat all sibling frames, not the one we want), then
        // wraps that as a 'repeat' pattern.
        //
        // Failures (e.g., tainted-canvas SecurityError) are cached as
        // a `null` sentinel so we don't re-throw and re-warn at frame
        // rate. The fallback color path takes over for that patternKey
        // until the page reloads.
        _getPattern(tf) {
          if (!tf || !tf.atlas) return null;
          if (this._patternCache.has(tf.patternKey)) {
            return this._patternCache.get(tf.patternKey);
          }

          const off = document.createElement("canvas");
          off.width = tf.frame.w;
          off.height = tf.frame.h;
          const offCtx = off.getContext("2d");
          offCtx.imageSmoothingEnabled = !tf.pixelated;
          try {
            offCtx.drawImage(
              tf.atlas,
              tf.frame.x,
              tf.frame.y,
              tf.frame.w,
              tf.frame.h,
              0,
              0,
              tf.frame.w,
              tf.frame.h
            );
          } catch (e) {
            console.warn(
              "[elm-canvas tiledFills] atlas drawImage failed for",
              tf.patternKey,
              "— falling back to surface color permanently for this id:",
              e
            );
            this._patternCache.set(tf.patternKey, null);
            return null;
          }
          const pattern = this.context.createPattern(off, "repeat");
          this._patternCache.set(tf.patternKey, pattern);
          return pattern;
        }

        execCommand(cmd) {
          if (cmd.type === "function") {
            this.context[cmd.name](...cmd.args);
          } else if (cmd.type === "field") {
            this.context[cmd.name] = cmd.value;
          }
        }
      }
    );
  } else {
    throw new Error(
      "window.customElements does not exist. Please use an appropriate polyfill"
    );
  }
}
