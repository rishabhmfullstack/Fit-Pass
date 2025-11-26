import type { Plugin } from "vite";

export function screenGraphPlugin(): Plugin {
  return {
    name: "local-screen-graph-plugin",
    apply: "serve",
    configureServer() {
    },
  };
}
