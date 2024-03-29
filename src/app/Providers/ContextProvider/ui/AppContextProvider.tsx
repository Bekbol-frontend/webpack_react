import { ReactNode, useEffect, useMemo, useState } from "react";
import { AppContext } from "../config";
import { LOCAL_STORAGE_THEME } from "@/shared/const/localstorage";
import { ThemeType } from "../model";

interface IProps {
  children: ReactNode;
}

const getThemeLocalStorage = (): ThemeType => {
  return localStorage.getItem(LOCAL_STORAGE_THEME)
    ? (localStorage.getItem(LOCAL_STORAGE_THEME) as ThemeType)
    : "light";
};

// Memo bul jerge kerek emes
// sebebi bul Component propsta children qabil etedi!!!

export default function AppContextProvider({ children }: IProps) {
  const [theme, setTheme] = useState(() => getThemeLocalStorage());
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      collapsed,
      toggleCollapsed,
    }),
    [theme, collapsed]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
