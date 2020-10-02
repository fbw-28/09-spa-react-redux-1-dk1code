export const incrementX = (value = 1) => {
    return {
        type: "incrementX",
        payload: value
    };
}

export const incrementY = (value = 1) => {
  return {
    type: "incrementY",
    payload: value,
  };
};