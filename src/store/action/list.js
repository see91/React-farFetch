import * as types from '../action-types';

import {getData} from '../../api/list'

let info = {offset: 5, id: 20};
let actions = {
    getDatas() {
        return function (dispatch, getState) {
            getData(info).then(date => {
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