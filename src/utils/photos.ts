import { photo } from "src/@types/photos";

export function getNUrls(hits: photo[], n: number) {
  return hits.slice(0, n).map((hit) => hit.pageURL);
}
