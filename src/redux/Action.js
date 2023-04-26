export const ADD_DATA = 'ADD_DATA';
export const GET_DATA = 'GET_DATA';
export const ADD_DATA_TO_HISTORY = 'ADD_DATA_TO_HISTORY';

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data
});

export const getData = () => ({
  type: GET_DATA
});
