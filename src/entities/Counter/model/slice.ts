import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter-slice",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    changeCount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
