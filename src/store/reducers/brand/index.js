import * as types from '../../action-types'
let initState = {
    man:[],
    woman:[],
    children:[],
    swiper:[],
    type:""
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_BRANDMAN:

            return {
                ...state,
                type:"man",
                man: action.payload
            };
        case types.GET_BRANDWOMAN:
            console.log("+++++");
            return {
                ...state,
                type:"woman",
                woman:action.payload
            }
        case types.GET_BRANDCHILDREN:
            return {
                ...state,
                type:"children",
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
