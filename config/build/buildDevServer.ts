import { IBuildOptions } from "./types/config";
import { Configuration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): Configuration {
  return {
    static: {
      directory: options.paths.devServer,
    },
    compress: true,
    port: options.port,
    hot: true,
    open: true,
    historyApiFallback: true,
  };
}
