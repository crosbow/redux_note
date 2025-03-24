import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "../features/counters/counterSlice";
import postReduce from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: counterReduce,
    posts: postReduce,
  },
});

export default store;
