import { useEffect } from "react";
import { useAppContext } from "../context/useAppContext";

export const useTheme = () => {
  const { theme } = useAppContext();
  const html = document.querySelector("html");

  useEffect(() => {
    const vars = ["--body-bg", "--content-bg", "--text-color"];

    vars.forEach((el) => {
      html?.style.setProperty(`${el}-default`, `var(${el}-${theme})`);
    });
  }, [theme]);
};
