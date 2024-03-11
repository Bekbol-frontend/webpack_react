import { FC, lazy } from "react";
import { IProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<IProps>>(() => import("./LoginForm"));
