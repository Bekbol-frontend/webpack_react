import {
  ChangeEventHandler,
  FormEvent,
  memo,
  useCallback,
  useState,
} from "react";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import styles from "./LoginForm.module.scss";
import {
  IErrorInput,
  IFormVal,
  InputNameAttr,
} from "../../models/types/loginSchema";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { loginForm } from "../../models/services/loginForm/loginForm";
import { useSelector } from "react-redux";
import { getSelectLoading } from "../../models/selectors/getSelectLoading";
import { getSelectError } from "../../models/selectors/getSelectError";
import { DynamicModuleLoader, Reducers } from "@/shared/lib";
import { loginReducer } from "../../models/slice/loginSlice";

export interface IProps {
  closeModal: () => void;
}

const reducers: Reducers = {
  login: loginReducer,
};

function LoginForm({ closeModal }: IProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getSelectLoading);
  const isError = useSelector(getSelectError);

  const [formVal, setFormVal] = useState<IFormVal>({
    username: "",
    password: "",
  });
  const [errorUsername, setErrorUsername] = useState<IErrorInput>({
    error: false,
    errorText: "",
  });
  const [errorPassword, setErrorPassword] = useState<IErrorInput>({
    error: false,
    errorText: "",
  });

  const { username, password } = formVal;

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormVal((prev) => ({ ...prev, [name]: value }));
      if (name === InputNameAttr.USER_NAME && value !== "") {
        setErrorUsername({
          error: false,
          errorText: "",
        });
      }
      if (name === InputNameAttr.PASSWORD && value !== "") {
        setErrorPassword({
          error: false,
          errorText: "",
        });
      }
    },
    []
  );

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username !== "" && password !== "") {
      const res = await dispatch(loginForm(formVal));
      if (res.meta.requestStatus === "fulfilled") {
        closeModal();
      }
    }

    if (username === "") {
      setErrorUsername({
        error: true,
        errorText: t("Please input your username"),
      });
    }
    if (password === "") {
      setErrorPassword({
        error: true,
        errorText: t("Please input your password"),
      });
    }
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <form onSubmit={onSubmitLogin}>
        {isError && (
          <div className={styles.errorBlock}>
            <h1>{isError}</h1>
          </div>
        )}
        <div className={styles.formBlock}>
          <Input
            value={username}
            name={InputNameAttr.USER_NAME}
            onChange={onChangeInput}
            placeholder={t("Enter username")}
            autFocus
            error={errorUsername.error}
            errorText={errorUsername.errorText}
          />
          <Input
            value={password}
            name={InputNameAttr.PASSWORD}
            onChange={onChangeInput}
            placeholder={t("Enter password")}
            error={errorPassword.error}
            errorText={errorPassword.errorText}
          />
          <Button loading={isLoading} disabled={isLoading}>
            {t("login")}
          </Button>
        </div>
      </form>
    </DynamicModuleLoader>
  );
}

export default memo(LoginForm);
