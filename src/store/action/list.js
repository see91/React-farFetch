import * as types from '../action-types';

import {getData} from '../../api/list'

let actions = {
    getDatas() {
        return function (dispatch, getState) {
            getData().then(date => {
                dispatch({
                    type: types.GET_DATALIST,
                    payload: date
                });
            })
        }
    }
};

export default actions