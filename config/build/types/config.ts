export type Mods = "development" | "production";

export interface IPaths {
  entry: string;
  output: string;
  html: string;
  devServer: string;
  src: string;
  locales: string;
  buildLocales?: string;
}

export interface IBuildEnv {
  mode: Mods;
  port: number;
}

export interface IBuildOptions {
  mode: Mods;
  paths: IPaths;
  isDev: boolean;
  isProd: boolean;
  port: number;
}
