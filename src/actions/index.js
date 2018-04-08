import * as types from "../constants/actionTypes"

export function addOne() {
    return {
        type: types.ADD_ONE
    };
}

export function subtractOne() {
    return {
        type: types.SUBTRACT_ONE
    };
}

export function doubleValue() {
    return {
        type: types.DOUBLE_VALUE
    };
}