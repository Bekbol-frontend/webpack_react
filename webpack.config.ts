import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { IBuildEnv, IPaths } from "./config/build/types/config";

const config = (env: IBuildEnv) => {
  const mode = env.mode || "development";
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";
  const port = env.port || 3000;

  const paths: IPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    devServer: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public/locales"),
    buildLocales: path.resolve(__dirname, "build/public"),
  };

  const configWebpack: webpack.Configuration = buildWebpack({
    mode,
    paths,
    isDev,
    isProd,
    port,
  });

  return configWebpack;
};

export default config;
