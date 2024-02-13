import { memo } from "react";
import Button from "../../Button/ui/Button";
import { useTranslation } from "react-i18next";

function LangButton() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return <Button onClick={changeLanguage}>{t("lang")}</Button>;
}

export default memo(LangButton);
