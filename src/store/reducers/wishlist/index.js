import * as types from '../../action-types'

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_COLLECT:
            return {
                ...state,
                collectList: action.payload
            };

        default:
            return state
    }
}