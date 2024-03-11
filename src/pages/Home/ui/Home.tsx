import { getUserState } from "@/entities/User/model/selectors/getUserState";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Home() {
  const { t } = useTranslation();

  const { user } = useSelector(getUserState);

  return (
    <div>
      <h1>{t("main page")}</h1>
      {user?.username ? <h1>{user.username}</h1> : <h1>joq</h1> }
    </div>
  );
}

export default memo(Home);
