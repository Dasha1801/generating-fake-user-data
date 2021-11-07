import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const initStore = {
  db: [],
  region: "usa",
  numberPage: 1,
  errorRate: 0,
  seed: 0,
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initStore,
});
