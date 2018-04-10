import * as types from "../constants/actionTypes";

// const initialState = {
    // value: 1
// };
const initialState = 1;

export default function(state = initialState, action) {
    switch (action.type) {
    case types.ADD_ONE:
        // return {value: state.value + 1};
        return state + 1;
    case types.SUBTRACT_ONE:
        // return {value: state.value - 1};
        return state - 1;
    case types.DOUBLE_VALUE:
        // return {value: state.value * 2};
        return state * 2;
    default:
        return state;
    }
}