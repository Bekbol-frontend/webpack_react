import Counter from "@/entities/Counter";
import { Input } from "@/shared/ui/Input";
import { memo } from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("main page")}</h1>
      <Input placeholder="dsakdsa" />
    </div>
  );
}

export default memo(Home);
