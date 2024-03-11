import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserSchema } from "../types/user";
import { USER_AUTH } from "@/shared/const/localstorage";

const getUserAuth = (): IUser | null => {
  return localStorage.getItem(USER_AUTH)
    ? (JSON.parse(localStorage.getItem(USER_AUTH) ?? "{}") as IUser)
    : null;
};

const initialState: IUserSchema = {
  user: getUserAuth(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      localStorage.removeItem(USER_AUTH);
      state.user = null;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
