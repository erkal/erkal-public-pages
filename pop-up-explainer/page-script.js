import * as KaTeX from "./katex-shim.js";

export function afterInit(app) {
  KaTeX.wirePorts(app);
}
