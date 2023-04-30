const initialState = {
  name: false,
  balance: false,
  price: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "SET_BALANCE":
      return {
        ...state,
        balance: action.payload
      }
        ;
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;