import { initStore } from "./store";

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case "FILL_DB":
      return { ...state, dbEn: action.payload };
    default:
      return state;
  }
};
