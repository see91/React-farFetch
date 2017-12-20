import * as types from '../../action-types'

let initState = {
    swiper: [],
    choose:[],
  groom:[],
  list1:[],
  list2:[],
  list3:[],

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
        };
      case types.GET_LIST1:
        return{
          ...state,
          list1:action.payload
        }
      case types.GET_LIST2:
        return{
          ...state,
          list2:action.payload
        }
      case types.GET_LIST3:
        return{
          ...state,
          list3:action.payload
        }
        default:
            return state
    }
}