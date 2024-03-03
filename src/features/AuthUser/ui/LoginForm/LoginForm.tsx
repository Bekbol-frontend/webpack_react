import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import styles from "./LoginForm.module.scss";

function LoginForm() {
  const { t } = useTranslation();

  return (
    <form>
      <div className={styles.formBlock}>
        <Input placeholder="user name..." />
        <Input placeholder="user password..." />
        <Button>{t("login")}</Button>
      </div>
    </form>
  );
}

export default LoginForm;
