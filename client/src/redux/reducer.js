import { initStore } from "./store";

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case "FILL_DB":
      return { ...state, db: action.payload };
    case "CHOOSE_REGION":
      return { ...state, region: action.payload };
    case "CHOOSE_PAGE":
      return { ...state, numberPage: action.payload };
    case "ERROR_RATE":
      return { ...state, errorRate: action.payload };
    case "APPLY_SEED":
      return { ...state, seed: action.payload };
    default:
      return state;
  }
};
