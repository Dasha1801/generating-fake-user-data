export const fillDb = (result) => {
  return {
    type: "FILL_DB",
    payload: result,
  };
};

export const chooseRegion = (result) => {
  return {
    type: "CHOOSE_REGION",
    payload: result,
  };
};

export const choosePage = (result) => {
  return {
    type: "CHOOSE_PAGE",
    payload: result,
  };
};

export const getErrorValue = (result) => {
  return {
    type: "ERROR_RATE",
    payload: result,
  };
};

export const applySeed = (result) => {
  return {
    type: "APPLY_SEED",
    payload: result,
  };
};
