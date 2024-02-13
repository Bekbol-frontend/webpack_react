import { memo } from "react";
import styles from "./Sidebar.module.scss";
import Button from "@/shared/ui/Button/ui/Button";
import { useAppContext } from "@/shared/hooks";
import { clsx } from "@/shared/lib/clsx";
import { Icon } from "@/shared/ui/Icon";

function Sidebar() {
  const { collapsed, toggleCollapsed } = useAppContext();

  return (
    <aside
      className={clsx([styles.sidebar], { [styles.collapsed]: collapsed })}
    >
      <div className={styles.siderbarInner}>
        <div className={styles.menuBlock}>
          <p>l</p>
        </div>
        <Button onClick={toggleCollapsed} classNameProps={styles.collapsedBtn}>
          <Icon icon={collapsed ? "chevron-right" : "chevron-left"} />
        </Button>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
