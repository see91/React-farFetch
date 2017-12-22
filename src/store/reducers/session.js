import * as types from '../action-types';

let initState = {
    reg: {
        error: "",
        success: "",
        user: null,
    },
    login: {
        error: "",
        success: "",
        user: null,
    }
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.REG:
            return {
                ...state,
                reg: action.payload
            };
        case types.LOGIN:
            return {
                ...state,
                login: action.payload
            };
        case types.LOGOUT:
            return {
                ...action.payload
            };
        case types.Validate:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}