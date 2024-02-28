import { memo } from "react";
import Spinner from "../../Spinner";
import styles from "./PageLoading.module.scss";

function PageLoading() {
  return (
    <div className={styles.pageLoading}>
      <Spinner />
    </div>
  );
}

export default memo(PageLoading);
