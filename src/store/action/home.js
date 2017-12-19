import * as types from '../action-types';

import {getSwiper,getChoose} from '../../api/home'

let actions = {
    reqSliders() {
        return function (dispatch, getState) {
            getSwiper().then(date => {
                dispatch({
                    type: types.GET_SLIDERS,
                    payload: date
                });
            })
          getChoose().then(data=>{
              dispatch({
                type: types.GET_CHOOSE,
                payload:data
              })
          })
        }
    }
};

export default actions