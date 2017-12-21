import * as types from '../../action-types';

let initState = {
    prdList: {},
    goodList:{}
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_PRDDETAIL:
            return {
                ...state,
                prdList: action.payload
            };
            case types.GET_GETLIST:
            return {
                ...state,
                goodList: action.payload
            };
        default:
            return state
    }
}