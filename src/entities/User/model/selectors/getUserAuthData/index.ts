import { createSelector } from "@reduxjs/toolkit";
import { getUserState } from "../getUserState";
import { IUserSchema } from "../../types/user";

export const getUserAuthData = createSelector(
  getUserState,
  (data: IUserSchema) => data.user
);
