import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "../features/counters/counterSlice";

const store = configureStore({
  reducer: {
    counters: counterReduce,
  },
});

export default store;
