import { wireLevels } from "./levels-sync.js";

export function afterInit(app) {
  wireLevels(app);
}
