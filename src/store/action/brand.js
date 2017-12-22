import * as types from '../action-types';
import {getBrandChildren, getBrandMan, getBrandSwiper, getBrandWoman} from '../../api/brand'
let actions = {
    reqBrandMan() {
        return function (dispatch, getState) {
            getBrandMan().then(data => {
                dispatch({
                    type: types.GET_BRANDMAN,
                    payload: data
                });
            })
        }
    },
    reqBrandWomen() {
        return function (dispatch, getState) {
            getBrandWoman().then(data => {
                dispatch({
                    type: types.GET_BRANDWOMAN,
                    payload: data
                });
            })
        }
    },
    reqBrandChildren() {
        return function (dispatch, getState) {
            getBrandChildren().then(data => {
                dispatch({
                    type: types.GET_BRANDCHILDREN,
                    payload: data
                });
            })
        }
    },
    reqBrandSwiper() {
        return function (dispatch, getState) {
            getBrandSwiper().then(data => {
                dispatch({
                    type: types.GET_BRANDSWIPER,
                    payload: data
                });
            })
        }
    }
};
export default actions
