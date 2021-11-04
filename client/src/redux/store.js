import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const initStore = {
  dbEn: [],
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initStore,
});
