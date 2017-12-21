import * as types from '../action-types'

import {getPrddetail,getGoodsList} from '../../api/detail'

let action = {
    reqDetail(id) {
        return function (dispatch, getState) {
            getPrddetail(id).then(data => {
                dispatch({
                    type: types.GET_PRDDETAIL,
                    payload: data
                })
            })
        }
    },
    reqGood(id) {
        return function (dispatch, getState) {
            getGoodsList(id).then(data => {
                dispatch({
                    type: types.GET_GETLIST,
                    payload: data
                })
            })
        }
    },
};

export default action
