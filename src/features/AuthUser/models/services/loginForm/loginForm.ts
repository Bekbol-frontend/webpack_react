import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFormVal } from "../../types/loginSchema";
import axios from "axios";
import i18n from "@/shared/config/i18n";
import { userActions } from "@/entities/User/model/slice/userSlice";
import { USER_AUTH } from "@/shared/const/localstorage";
import { IUser } from "@/entities/User/model/types/user";

export const loginForm = createAsyncThunk<
  IUser,
  IFormVal,
  { rejectValue: string | null }
>("login/loginForm", async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<IUser>(
      "http://localhost:8000/login",
      data
    );

    if (!response.data || response.status !== 200) {
      throw new Error();
    }

    localStorage.setItem(USER_AUTH, JSON.stringify(response.data));
    dispatch(userActions.setUser(response.data));

    return response.data;
  } catch (error) {
    return rejectWithValue(
      i18n.t("You entered an incorrect username or password")
    );
  }
});
