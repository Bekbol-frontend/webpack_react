import { memo } from "react";
import { useAppContext } from "@/shared/hooks";
import Button from "../../Button/ui/Button";
import { Icon } from "../../Icon";
import styles from "./ThemeButton.module.scss";

function ThemeButton() {
  const { toggleTheme, theme } = useAppContext();

  return (
    <Button
      onClick={toggleTheme}
      type_btn="text"
      classNameProps={styles.themeBtn}
    >
      <span>
        {theme === "light" ? <Icon icon="moon" /> : <Icon icon="sun" />}
      </span>
    </Button>
  );
}

export default memo(ThemeButton);
