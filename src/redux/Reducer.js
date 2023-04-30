export const setName = name => {
  return {
    type: "SET_NAME",
    payload: name
  };
};

export const setBalance = balance => {
  return {
    type: "SET_BALANCE",
    payload: balance
  };
};
export const setPrice = price => {
  return {
    type: "SET_PRICE",
    payload: price
  };
};