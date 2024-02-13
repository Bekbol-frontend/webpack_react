export type ThemeType = "dark" | "light";

export interface IContext {
  theme: ThemeType;
  toggleTheme: () => void;
  collapsed: boolean;
  toggleCollapsed: () => void;
}
