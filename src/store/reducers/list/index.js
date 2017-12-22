import * as types from '../../action-types'

let initState = {
    getList:{
        offset:0,
        hasMore:true
    },
    currentList:[],
};


export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_DATALIST:
            return {
                ...state,
                getList: action.payload,
            };
        case types.GET_CURRENTLIST:
            return {
                ...state,
                currentList: action.payload
            };
            case types.GET_COLLECT:
            console.log(action.payload);
            return {
                ...state,
                collectList: action.payload
            };

        default:
            return state
    }
}