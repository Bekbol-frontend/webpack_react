export interface IUser {
  username: string;
  password: string;
  id: string;
}

export interface IUserSchema {
  user: IUser | null;
}
