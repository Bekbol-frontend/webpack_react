import { InputHTMLAttributes, memo, useEffect, useRef } from "react";
import styles from "./Input.module.scss";
import { TypeMods, clsx } from "@/shared/lib/clsx";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
  error?: boolean;
  errorText?: string;
  autFocus?: boolean;
}

function Input(props: IProps) {
  const {
    type = "text",
    classNames = "",
    error = false,
    errorText = "",
    autFocus = false,
    ...otherProps
  } = props;

  const mods: TypeMods = {
    [styles.error]: error,
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autFocus) {
      inputRef.current?.focus();
    }
  }, [autFocus]);

  return (
    <div className={clsx([styles.inputBlock], mods)}>
      <input
        type={type}
        className={clsx([styles.input, classNames])}
        ref={inputRef}
        {...otherProps}
      />
      <span className={styles.errorSpan}>{errorText}</span>
    </div>
  );
}

export default memo(Input);
