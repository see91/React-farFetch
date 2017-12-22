import * as types from '../action-types';

import {reqCollects} from '../../api/list'

let info = {offset: 5, id: 20};
let actions = {
        reqCollect(id) {
            return function (dispatch, getState) {
                reqCollects(id).then(data => {
                    dispatch({
                        type: types.GET_GETLIST,
                        payload: data
                    })
                })
            }
        },
};

export default actions