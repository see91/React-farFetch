import * as types from '../action-types'

import {getShopcars} from '../../api/shopcars'

let actions = {
    getShopcar(id) {
        return function (dispatch, getState) {
            getShopcars(id).then(date => {
                dispatch({
                    type: types.GET_SHOPCARS,
                    payload: date
                });
            })
        }
    }
};

export default actions