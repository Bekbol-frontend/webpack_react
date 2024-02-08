import { ButtonHTMLAttributes } from "react";
import { TypeMods, clsx } from "@/shared/lib/clsx";
import styles from "./Button.module.scss";

type TypeElement = "primary" | "default" | "dashed" | "text";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNameProps?: string;
  type_btn?: TypeElement;
  danger?: boolean;
}

function Button(props: IProps) {
  const {
    children,
    classNameProps = "",
    type_btn = "primary",
    danger = false,
    ...otherProps
  } = props;

  const mods: TypeMods = {
    [styles[type_btn]]: true,
    [styles.danger]: danger,
  };

  return (
    <button
      className={clsx([styles.btn, classNameProps], mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
