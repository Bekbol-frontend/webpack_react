import { ButtonHTMLAttributes } from "react";
import { TypeMods, clsx } from "@/shared/lib/clsx";
import styles from "./Button.module.scss";
import { Icon } from "../../Icon";

type TypeElement = "primary" | "default" | "dashed" | "text";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNameProps?: string;
  type_btn?: TypeElement;
  danger?: boolean;
  loading?: boolean;
}

function Button(props: IProps) {
  const {
    children,
    classNameProps = "",
    type_btn = "primary",
    danger = false,
    loading = false,
    ...otherProps
  } = props;

  const mods: TypeMods = {
    [styles[type_btn]]: true,
    [styles.danger]: danger,
    [styles.loading]: loading,
  };

  return (
    <button
      className={clsx([styles.btn, classNameProps], mods)}
      {...otherProps}
    >
      {children}
      {loading && (
        <span>
          <Icon icon="loading" />
        </span>
      )}
    </button>
  );
}

export default Button;
