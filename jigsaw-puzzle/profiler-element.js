const WORKER_CODE = `
let callStack = [];
let flameGraph = {};
let tickSnapshots = [];
let mode = 'full';

// Per-frame channel — sparse maps accumulated per RAF tick.
// Memory: ~kilobytes for a 1800-tick recording. Active in both modes.
let perTickLabels = [];      // Array<{label: ms}>
let perTickScalars = [];     // Array<{name: value}>
let perTickTotals = [];      // Array<wallClockMs>

let currentTickLabels = {};
let currentTickScalars = {};
let lastTimestamp = null;

onmessage = function(e) {
    switch (e.data.type) {
        case 'setMode':
            mode = e.data.mode;
            break;

        case 'reset':
            callStack = [];
            flameGraph = {};
            tickSnapshots = [];
            perTickLabels = [];
            perTickScalars = [];
            perTickTotals = [];
            currentTickLabels = {};
            currentTickScalars = {};
            lastTimestamp = null;
            break;

        case 'tick':
            // Three prefixes:
            //   's:<label>' — call start
            //   'e:<label>' — call end (closes outermost frame)
            //   'a:<name>'  — app scalar; m.detail.value carries the float
            for (const m of e.data.entries) {
                if (m.name[1] !== ':') continue;
                const kind = m.name[0];
                const name = m.name.slice(2);

                if (kind === 's') {
                    const parent = callStack.length > 0
                        ? callStack[callStack.length - 1].node.children
                        : flameGraph;
                    if (!parent[name]) {
                        parent[name] = { duration: 0, callCount: 0, children: {} };
                    }
                    callStack.push({ name, start: m.timeStamp, node: parent[name] });
                } else if (kind === 'e') {
                    if (callStack.length === 0) {
                        console.warn('[Profiler] end mark with empty stack:', name);
                    } else if (callStack[callStack.length - 1].name !== name) {
                        console.warn('[Profiler] mismatched end. Expected:', callStack[callStack.length - 1].name, 'Got:', name);
                    } else {
                        const frame = callStack.pop();
                        const dur = m.timeStamp - frame.start;
                        frame.node.duration += dur;
                        frame.node.callCount++;
                        currentTickLabels[name] = (currentTickLabels[name] || 0) + dur;
                    }
                } else if (kind === 'a') {
                    // Drop (don't zero) on invalid input — a measurement tool
                    // that quietly turns NaN / Infinity / missing detail into
                    // 0 produces lying charts. typeof NaN === 'number' so the
                    // guard must use Number.isFinite, not typeof.
                    const v = m.detail && m.detail.value;
                    if (Number.isFinite(v)) {
                        currentTickScalars[name] = v;
                    } else {
                        console.warn('[Profiler] bad scalar for', name, '— got:', v);
                    }
                }
            }
            // Per-tick boundary: roll currentTick* into perTick* arrays.
            // wallClock is 0 for tick 0 (no previous timestamp).
            const wallClock = lastTimestamp === null ? 0 : (e.data.timestamp - lastTimestamp);
            lastTimestamp = e.data.timestamp;
            perTickTotals.push(wallClock);
            perTickLabels.push(currentTickLabels);
            perTickScalars.push(currentTickScalars);
            currentTickLabels = {};
            currentTickScalars = {};
            // Snapshot accumulated state — skipped in headless mode (no flame chart)
            if (mode !== 'headless') {
                tickSnapshots.push({
                    timestamp: e.data.timestamp,
                    flameGraph: deepCopy(flameGraph)
                });
            } else {
                // Still need a timestamp marker for windowMs / fps computation;
                // store a tiny entry without the deep-copied tree.
                tickSnapshots.push({ timestamp: e.data.timestamp });
            }
            break;

        case 'getResult':
            const frames = perTickTotals.map((totalMs, i) => ({
                tick: i,
                totalMs,
                labels: perTickLabels[i] || {},
                app: perTickScalars[i] || {},
            }));
            postMessage({
                type: 'result',
                tickSnapshots,
                flatSummary: flattenAccumulated(flameGraph),
                frames
            });
            break;
    }
};

// Walk the accumulated flame graph and sum duration + callCount by label name.
// When the same label appears at multiple positions in the tree (e.g. a helper
// called from two parents), entries fold into one row — that's the "total time
// spent in label X" read that a terminal summary wants.
function flattenAccumulated(fg) {
    const acc = {};
    function walk(node, name) {
        const entry = acc[name] || { total: 0, count: 0 };
        entry.total += node.duration;
        entry.count += node.callCount;
        acc[name] = entry;
        for (const [childName, child] of Object.entries(node.children)) {
            walk(child, childName);
        }
    }
    for (const [name, node] of Object.entries(fg)) {
        walk(node, name);
    }
    return acc;
}

function deepCopy(graph) {
    const copy = {};
    for (const [name, node] of Object.entries(graph)) {
        copy[name] = {
            duration: node.duration,
            callCount: node.callCount,
            children: deepCopy(node.children)
        };
    }
    return copy;
}
`;

/**
 * IMPORTANT: Worker created via Blob URL to bypass file:// CORS restrictions.
 */
function createWorker() {
  const blob = new Blob([WORKER_CODE], { type: "application/javascript" });
  return new Worker(URL.createObjectURL(blob));
}

class ProfilerElement extends HTMLElement {
  static get observedAttributes() {
    return ["running", "mode"];
  }

  constructor() {
    super();
    this.worker = null;
    this.observer = null;
    this.rafId = null;
    this.recordingStartTime = null;
  }

  connectedCallback() {
    this.worker = createWorker();
    // Mode attribute determines whether per-tick deep-copies happen.
    // 'full' (default) supports the flame-chart UI; 'headless' skips
    // snapshots for cheaper Claude/Playwright recordings.
    const initialMode = this.getAttribute("mode") || "full";
    this.worker.postMessage({ type: "setMode", mode: initialMode });
    this.worker.onmessage = (e) => {
      if (e.data.type !== "result") return;
      const { tickSnapshots, flatSummary, frames } = e.data;
      const recordingStartTime = this.recordingStartTime;

      const ticks = tickSnapshots.length;
      const firstTs =
        ticks > 0 ? tickSnapshots[0].timestamp : recordingStartTime;
      const lastTs =
        ticks > 0 ? tickSnapshots[ticks - 1].timestamp : recordingStartTime;
      const windowMs = Math.max(0, lastTs - firstTs);
      const fps = windowMs > 0 ? (ticks / windowMs) * 1000 : 0;

      const result = {
        recordingStartTime,
        ticks,
        windowMs: +windowMs.toFixed(2),
        fps: +fps.toFixed(2),
        flat: flatSummary,
        frames,
        tickSnapshots,
      };

      // L2 always-on output channels
      window.__lastProfile = result;
      emitTerminalSummary(tickSnapshots, flatSummary);
      emitJsonLine(result);

      // Existing — Elm consumer (Play.Profiler view) decodes detail
      this.dispatchEvent(new CustomEvent("result", { detail: result }));

      // Grasp-only file write (no-op on this project — electronAPI undefined)
      saveSnapshotToDisk(result);
    };
  }

  disconnectedCallback() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.observer?.disconnect();
    this.worker?.terminate();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.worker) return;

    if (name === "mode") {
      this.worker.postMessage({ type: "setMode", mode: newValue || "full" });
      return;
    }

    if (name !== "running") return;
    if (newValue !== null) {
      this.startRecording();
    } else {
      this.stopRecording();
    }
  }

  startRecording() {
    this.recordingStartTime = performance.now();
    this.worker.postMessage({ type: "reset" });
    performance.clearMarks();

    this.observer = new PerformanceObserver(() => {});
    this.observer.observe({ entryTypes: ["mark"] });

    // RAF loop for tick boundaries (only during recording)
    const loop = () => {
      const marks = this.observer.takeRecords().map((m) => ({
        name: m.name,
        timeStamp: m.startTime,
        detail: m.detail,
      }));
      this.worker.postMessage({
        type: "tick",
        timestamp: performance.now(),
        entries: marks,
      });
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  stopRecording() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.observer?.disconnect();
    this.observer = null;
    this.worker.postMessage({ type: "getResult" });
  }
}

customElements.define("profiler-element", ProfilerElement);

// --- window.__playProfile (Claude / programmatic / URL-flag entry point) ---
//
// Lazy singleton hidden <profiler-element> reused across calls. Created on
// first invocation, kept alive for the page lifetime, worker reset between
// recordings via the 'reset' message. Always uses mode='headless' to skip
// per-tick deep-copies (the caller never reads tickSnapshots — only flat).
//
// Intentionally NEVER touches an Elm-owned <profiler-element>: Elm's view
// tick would clobber imperative attribute changes. Both can run simultaneously
// without interfering — multiple PerformanceObservers see the same mark stream.
//
// Hard caps:
//   max durationMs = 20 000  (Playwright's default evaluate timeout is 30 s)
//   timeout        = durationMs + 2000  (worker hung -> reject)

const MAX_DURATION_MS = 20000;
let _headlessEl = null;

function getHeadlessElement() {
  if (_headlessEl) return _headlessEl;
  _headlessEl = document.createElement("profiler-element");
  _headlessEl.setAttribute("mode", "headless");
  _headlessEl.style.cssText =
    "position:absolute;left:-9999px;top:0;width:0;height:0;pointer-events:none;";
  document.body.appendChild(_headlessEl);
  return _headlessEl;
}

function recordOnElement(el, durationMs) {
  if (el.hasAttribute("running")) {
    return Promise.reject(
      new Error("profiler already recording on this element")
    );
  }
  return new Promise((resolve, reject) => {
    let settled = false;
    const onResult = (e) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutId);
      el.removeEventListener("result", onResult);
      resolve(e.detail);
    };
    const timeoutId = setTimeout(() => {
      if (settled) return;
      settled = true;
      el.removeEventListener("result", onResult);
      // Best-effort cleanup; element may still emit later, harmless.
      el.removeAttribute("running");
      reject(
        new Error(
          "profiler timeout (no result event within " +
            (durationMs + 2000) +
            "ms)"
        )
      );
    }, durationMs + 2000);
    el.addEventListener("result", onResult);
    el.setAttribute("running", "");
    setTimeout(() => el.removeAttribute("running"), durationMs);
  });
}

window.__playProfile = function (durationMs) {
  if (typeof durationMs !== "number" || !(durationMs > 0)) {
    return Promise.reject(
      new Error("__playProfile(durationMs): expected positive number")
    );
  }
  if (durationMs > MAX_DURATION_MS) {
    console.warn(
      "[profile] durationMs " +
        durationMs +
        " exceeds cap; clamping to " +
        MAX_DURATION_MS
    );
    durationMs = MAX_DURATION_MS;
  }
  return recordOnElement(getHeadlessElement(), durationMs);
};

window.__playProfile.start = function () {
  const el = getHeadlessElement();
  if (el.hasAttribute("running")) {
    throw new Error("profiler already recording on this element");
  }
  let stopFn;
  const promise = new Promise((resolve, reject) => {
    const onResult = (e) => {
      el.removeEventListener("result", onResult);
      resolve(e.detail);
    };
    el.addEventListener("result", onResult);
    stopFn = () => {
      el.removeAttribute("running");
      return promise;
    };
  });
  el.setAttribute("running", "");
  return { stop: stopFn };
};

// --- window.__playReady (page-settled signal for Claude / URL flag) ---------
//
// Heuristic: 3 consecutive RAF ticks have fired post-load → the Elm app
// has booted and is ticking. Not a real "assets loaded" signal — defer that
// until measurements show first-frame asset cost contaminating baselines
// (deferral recorded in TODO.md).

window.__playReady = new Promise((resolve) => {
  let ticks = 0;
  const check = () => {
    if (++ticks >= 3) resolve();
    else requestAnimationFrame(check);
  };
  requestAnimationFrame(check);
});

// --- ?profile=<ms>&warmup=<ms> URL flag --------------------------------------
//
// The reproducibility surface. Any Playwright run Claude reports can be
// reproduced by a human visiting the same URL. Fires once per page load.

(function handleUrlFlag() {
  const params = new URLSearchParams(location.search);
  const profileMs = parseInt(params.get("profile"), 10);
  if (!isFinite(profileMs) || profileMs <= 0) return;
  const warmupMs = Math.max(0, parseInt(params.get("warmup"), 10) || 500);

  window.__playReady
    .then(() => new Promise((r) => setTimeout(r, warmupMs)))
    .then(() => window.__playProfile(profileMs))
    .catch((err) => {
      console.error("[profile] URL flag profile failed:", err);
    });
})();

// --- Headless / agent output channel ---------------------------------------
//
// On every "Stop Recording", emit a one-screen summary through console.log
// with a `[profile]` prefix. src/main.js forwards `[profile]` console-message
// events to the main-process stdout, where a terminal (or an agent reading the
// background task output) can see them without opening DevTools.
//
// Separately, request the main process to persist the full RecordingResult to
// `<repo>/.profile/latest.json` + a timestamped sibling, so the tick-by-tick
// flame data is parseable after the fact.
//
// Both channels are additive: the in-app flame chart UI keeps working exactly
// as before.

function emitTerminalSummary(tickSnapshots, flatSummary) {
  const ticks = tickSnapshots.length;
  const firstTs = ticks > 0 ? tickSnapshots[0].timestamp : 0;
  const lastTs = ticks > 0 ? tickSnapshots[ticks - 1].timestamp : 0;
  const windowMs = Math.max(0, lastTs - firstTs);

  const rows = Object.entries(flatSummary)
    .map(([label, r]) => ({
      label,
      total: r.total,
      count: r.count,
      avg: r.count > 0 ? r.total / r.count : 0,
    }))
    .sort((a, b) => b.total - a.total);

  const topN = 25;
  console.log(
    `[profile] recording ticks=${ticks} window=${windowMs.toFixed(0)}ms labels=${rows.length}`
  );
  console.log(
    "[profile] " +
      pad("total(ms)", 12) +
      pad("avg(ms)", 10) +
      pad("count", 8) +
      " label"
  );
  for (const r of rows.slice(0, topN)) {
    console.log(
      "[profile] " +
        pad(r.total.toFixed(2), 12) +
        pad(r.avg.toFixed(3), 10) +
        pad(String(r.count), 8) +
        " " +
        r.label
    );
  }
  if (rows.length > topN) {
    console.log(
      `[profile] … ${rows.length - topN} more labels truncated (see .profile/latest.json)`
    );
  }
}

// Single-line, machine-readable result. Stable prefix → easy to grep / parse
// from Playwright's browser_console_messages or a plain DevTools tail.
// Excludes tickSnapshots: those can be megabytes for full-mode recordings,
// and headless callers never want them in the line. Full snapshots remain
// on window.__lastProfile for browser_evaluate readback.
function emitJsonLine(result) {
  const { ticks, windowMs, fps, flat, frames } = result;
  console.log(
    "[profile-result-json] " +
      JSON.stringify({ ticks, windowMs, fps, flat, frames })
  );
}

function pad(s, width) {
  const str = String(s);
  return str.length >= width ? str + " " : " ".repeat(width - str.length) + str;
}

function saveSnapshotToDisk(payload) {
  const api = window.electronAPI;
  if (!api || typeof api.saveProfileSnapshot !== "function") {
    return;
  }
  api
    .saveProfileSnapshot(payload)
    .then((result) => {
      if (result && result.path) {
        console.log(`[profile] saved ${result.path}`);
      }
    })
    .catch((err) => {
      console.log(
        `[profile] save failed: ${err && err.message ? err.message : err}`
      );
    });
}
