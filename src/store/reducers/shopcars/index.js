import * as types from '../../action-types'

let initState = {
    Shopcar: []
};


export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_SHOPCARS:
            return {
                ...state,
                Shopcar: action.payload
            };
        default:
            return state
    }
}