import { InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.scss";
import { TypeMods, clsx } from "@/shared/lib/clsx";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
  error?: boolean;
  errorText?: string;
}

function Input(props: IProps) {
  const {
    type = "text",
    classNames = "",
    error = false,
    errorText = "",
    ...otherProps
  } = props;

  const mods: TypeMods = {
    [styles.error]: error,
  };

  return (
    <div className={clsx([styles.inputBlock], mods)}>
      <input
        type={type}
        className={clsx([styles.input, classNames])}
        {...otherProps}
      />
      <span className={styles.errorSpan}>{errorText}</span>
    </div>
  );
}

export default memo(Input);
