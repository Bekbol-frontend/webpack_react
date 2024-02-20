import { useEffect } from "react";
import { useAppContext } from "./useAppContext";

export const useTheme = () => {
  const { theme } = useAppContext();
  const html = document.querySelector("html");

  useEffect(() => {
    const varsCss = [
      "body-bg",
      "content-bg",
      "text-color",
      "btn-bg",
      "btn-bg-hover",
      "btn-color",
    ];

    varsCss.forEach((el) => {
      html?.style.setProperty(`--${el}-default`, `var(--${el}-${theme})`);
    });
  }, [theme]);
};
