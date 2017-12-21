import * as types from '../../action-types'
let initState = {
    man:[],
    woman:[],
    children:[],
    swiper:[]
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_BRANDMAN:
            return {
                ...state,
                man: action.payload
            };
        case types.GET_BRANDWOMAN:
            return {
                ...state,
                woman:action.payload
            }
        case types.GET_BRANDCHILDREN:
            return {
                ...state,
                children:action.payload
            }
        case types.GET_BRANDSWIPER:
            return {
                ...state,
                swiper:action.payload
            }
        default:
            return state
    }
}
