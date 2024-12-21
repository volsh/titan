import NodeCache from "node-cache";
let cache: NodeCache;

export function getCache() {
  if (cache) {
    return cache;
  }
  cache = new NodeCache();
  return cache;
}
