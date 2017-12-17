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
    }
};

export default actions