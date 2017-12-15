import * as types from '../../action-types'

let initState = {
    swiper: []
};


export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_SLIDERS:
            console.log(action.payload);
            return {
                ...state,
                swiper: action.payload
            };
        default:
            return state
    }
}