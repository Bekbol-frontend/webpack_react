import { ReactNode, useEffect, useMemo, useState } from "react";
import { AppContext } from "./createContext";

interface IProps {
  children: ReactNode;
}

export type ThemeType = "dark" | "light";
export interface IContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const getThemeLocalStorage = (): ThemeType => {
  return localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ThemeType)
    : "light";
};

function AppContextProvider({ children }: IProps) {
  const [theme, setTheme] = useState(() => getThemeLocalStorage());

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
