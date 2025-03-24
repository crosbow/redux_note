import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterInd = initialState.findIndex((c) => c.id === action.payload);

      state[counterInd].value++;
    },
    decrement: (state, action) => {
      const counterInd = initialState.findIndex((c) => c.id === action.payload);

      state[counterInd].value--;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
