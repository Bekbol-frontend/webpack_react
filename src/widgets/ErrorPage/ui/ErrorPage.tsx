import { useTranslation } from "react-i18next";
import styles from "./ErrorPage.module.scss";
import Button from "@/shared/ui/Button/ui/Button";

function ErrorPage() {
  const { t } = useTranslation();

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorTitle}>{t("error page")}</h1>
      <Button onClick={reload}>{t("reload page")}</Button>
    </div>
  );
}

export default ErrorPage;
