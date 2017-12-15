import * as types from '../action-types';

import {getSwiper} from '../../api/home'

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
    }
};

export default actions