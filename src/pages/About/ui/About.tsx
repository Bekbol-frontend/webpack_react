import { memo } from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("about");

  return (
    <div>
      <h1>{t("about page")}</h1>
    </div>
  );
}

export default memo(About);
