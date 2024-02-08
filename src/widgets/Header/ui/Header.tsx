import { memo, useMemo } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { AppRoutes, routePath } from "@/shared/config/routeConfig";
import { clsx } from "@/shared/lib/clsx";
import { useAppContext } from "@/shared/hooks";
import { ThemeButton } from "@/shared/ui/ThemeButton";

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

  const { toggleTheme } = useAppContext();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to={routePath.home} className={styles.logo}>
          webpack react
        </Link>
        <div className={styles.headerLinks}>
          {navLinks}
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
