import { createSlice } from "@reduxjs/toolkit";
import { ILoginSchema } from "../types/loginSchema";
import { loginForm } from "../services/loginForm/loginForm";

const initialState: ILoginSchema = {
  isLoading: false,
  isError: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    initState(state) {
      state.isError = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginForm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loginForm.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginForm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
