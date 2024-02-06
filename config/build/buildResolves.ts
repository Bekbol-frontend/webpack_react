import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolves(options: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": options.paths.src,
    },
  };
}
