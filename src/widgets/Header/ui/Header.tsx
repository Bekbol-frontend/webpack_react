import { memo, useCallback, useMemo, useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { AppRoutes, routePath } from "@/shared/config/routeConfig";
import { clsx } from "@/shared/lib/clsx";
import { ThemeButton } from "@/shared/ui/ThemeButton";
import { LangButton } from "@/shared/ui/LangButton";
import Modal from "@/shared/ui/Modal";
import Button from "@/shared/ui/Button/ui/Button";

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
  const [modal, setModal] = useState(false);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  const showModal = useCallback(() => {
    setModal(true);
  }, []);

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

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to={routePath.home} className={styles.logo}>
          webpack react
        </Link>
        <div className={styles.headerLinks}>
          {navLinks}
          <ThemeButton />
          <LangButton />
          <Button onClick={showModal}>modal</Button>
        </div>
      </div>
      <Modal modal={modal} closeModal={closeModal}>
        <div>
          
        </div>
      </Modal>
    </header>
  );
}

export default memo(Header);
