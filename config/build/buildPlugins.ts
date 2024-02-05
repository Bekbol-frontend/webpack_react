import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(
  options: IBuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev, isProd } = options;

  const plugins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: "index.html",
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }

  return plugins;
}
