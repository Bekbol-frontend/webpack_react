import { useTranslation } from "react-i18next";
import styles from "./NotFound.module.scss";
import Button from "@/shared/ui/Button/ui/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>{t("not found page")}</h1>
      <Button onClick={() => navigate("/")}>{t("main page")}</Button>
    </div>
  );
}

export default NotFound;
