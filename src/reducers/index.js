import * as types from "../constants/actionTypes";

export default function(state, action) {
    switch (action.type) {
    case types.ADD_ONE:
        return state + 1;
    case types.SUBTRACT_ONE:
        return state - 1;
    case types.DOUBLE_VALUE:
        return state * 2;
    default:
        if (typeof(state) === "undefined") {
            return 1;
        } else {
            return state;
        }
    }
}