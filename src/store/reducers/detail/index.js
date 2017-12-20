import * as types from '../../action-types';

let initState = {
    prdList: {}
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_PRDDETAIL:
            return {
                ...state,
                prdList: action.payload
            };
        default:
            return state
    }
}