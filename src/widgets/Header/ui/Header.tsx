import { memo, useCallback, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppRoutes, routePath } from "@/shared/config/routeConfig";
import { clsx } from "@/shared/lib/clsx";
import { ThemeButton } from "@/shared/ui/ThemeButton";
import { LangButton } from "@/shared/ui/LangButton";
import { Button } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthUser";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { loginActions } from "@/features/AuthUser/models/slice/loginSlice";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { userActions } from "@/entities/User/model/slice/userSlice";

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

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const userAuthData = useSelector(getUserAuthData);

  const closeModal = useCallback(() => {
    setModal(false);
    dispatch(loginActions.initState());
  }, []);

  const showModal = useCallback(() => {
    setModal(true);
  }, []);

  const loginLogout = useCallback(() => {
    dispatch(userActions.logout());
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
          {userAuthData?.username ? (
            <Button onClick={loginLogout}>{t("logout")}</Button>
          ) : (
            <Button onClick={showModal}>{t("login")}</Button>
          )}
        </div>
      </div>
      <LoginModal modal={modal} closeModal={closeModal} lazy />
    </header>
  );
}

export default memo(Header);
