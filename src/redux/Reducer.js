import { ADD_DATA, GET_DATA } from './Action';

const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            const newData = action.payload;
            const newId = newData.id;
            const dataById = { ...state.dataById };
            dataById[newId] = newData;
            return {
                ...state,
                data: Object.values(dataById),
                dataById
            };
        case GET_DATA:
            return state;
        default:
            return state;
    }
};

export default reducer;