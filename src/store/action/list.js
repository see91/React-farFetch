import * as types from '../action-types';

import {getData} from '../../api/list'

let actions = {
    getDatas(cls) {
        return function (dispatch, getState) {
            getData(cls).then(date => {
                dispatch({
                    type: types.GET_DATALIST,
                    payload: date
                });
            })
        }
    },
    getCurrentLists() {
        return function (dispatch, getState) {
            getCurrentList().then(val => {
                dispatch({
                    type: types.GET_CURRENTLIST,
                    payload: val
                });
            })
        }
    },
};

export default actions