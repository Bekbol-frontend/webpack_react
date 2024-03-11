export interface ILoginSchema {
  isLoading: boolean;
  isError?: string | null;
}

export interface IFormVal {
  username: string;
  password: string;
}

export interface IErrorInput {
  error: boolean;
  errorText: string;
}

export enum InputNameAttr {
  USER_NAME = "username",
  PASSWORD = "password",
}
