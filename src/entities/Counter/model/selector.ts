import { IStateSchema } from "@/app/Providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { ICounterSchema } from "./types";

const counterVal = (state: IStateSchema) => state.counter;

export const value = createSelector(
  counterVal,
  (counter: ICounterSchema) => counter.value
);
