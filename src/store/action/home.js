import * as types from '../action-types';

import {getSwiper, getChoose, getGroom} from '../../api/home'

let actions = {
    reqSliders() {
        return function (dispatch, getState) {
            getSwiper().then(date => {
                dispatch({
                    type: types.GET_SLIDERS,
                    payload: date
                });
            })
        }
    },
    reqChoose(){
      return function (dispatch,getState) {
        getChoose().then(data=>{
          dispatch({
            type: types.GET_CHOOSE,
            payload:data
          })
        })
      }
    },
    reqGroom(){
      return function (dispatch,getState) {
        getGroom().then(data=>{
          dispatch({
            type: types.GET_GROOM,
            payload:data
          })
        })
      }
    },
};

export default actions