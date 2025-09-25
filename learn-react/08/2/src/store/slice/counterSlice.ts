import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// immer
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<{ amount: number }>) => {
      state.value += action.payload.amount; // { amount: 20}
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
