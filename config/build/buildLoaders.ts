import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./types/config";

export function buildLoaders({ isDev }: IBuildOptions): webpack.ModuleOptions {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
            auto: (resourcePath: string) => resourcePath.includes(".module."),
          },
        },
      },
      ,
      "sass-loader",
    ],
  };

  return {
    rules: [cssLoader, tsLoader],
  };
}
