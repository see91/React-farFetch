import * as types from '../action-types'

import {getPrddetail} from '../../api/detail'

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
    }
};
export default action
