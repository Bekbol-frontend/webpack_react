import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { IBuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash:8].js",
      path: paths.output,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResolves(),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
