import * as types from '../../action-types'

let initState = {
    swiper: [],
    choose:[],
  groom:[],
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_SLIDERS:
            return {
                ...state,
                swiper: action.payload
            };
      case types.GET_CHOOSE:
        return {
                ...state,
               choose:action.payload
              };
      case types.GET_GROOM:
        return {
          ...state,
          groom:action.payload
        }
        default:
            return state
    }
}