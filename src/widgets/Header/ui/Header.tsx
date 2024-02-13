import { memo, useMemo } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { AppRoutes, routePath } from "@/shared/config/routeConfig";
import { clsx } from "@/shared/lib/clsx";
import { useAppContext } from "@/shared/hooks";
import { ThemeButton } from "@/shared/ui/ThemeButton";
import Button from "@/shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
import { LangButton } from "@/shared/ui/LangButton";

const links: {
  to: string;
  name: AppRoutes[];
}[] = [
  {
    to: routePath.home,
    name: [AppRoutes.HOME],
  },
  {
    to: routePath.about,
    name: [AppRoutes.ABOUT],
  },
];

function Header() {
  const navLinks = useMemo(
    () =>
      links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            clsx([styles.link], { [styles.active]: isActive })
          }
          to={link.to}
          key={link.to}
        >
          {link.name}
        </NavLink>
      )),
    []
  );

  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    console.log(i18n.language);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to={routePath.home} className={styles.logo}>
          webpack react {t("hello")}
        </Link>
        <div className={styles.headerLinks}>
          {navLinks}
          <ThemeButton />
          <LangButton />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
