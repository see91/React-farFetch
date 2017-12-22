import * as types from '../action-types';

import {getData,getCurrentList} from '../../api/list'

let info = {offset: 5, id: 20};
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
    getCurrentLists(type) {
        return function (dispatch, getState) {
            getCurrentList(type).then(val => {
                dispatch({
                    type: types.GET_CURRENTLIST,
                    payload: val
                });


            })
        }
    },
    getCollects(isColl,collPrd) {
        if (isColl.isCollection==false){
            isColl.isCollection='';
        }
        return function (dispatch, getState) {
            getCollect(isColl,collPrd).then(val => {
                dispatch({
                    type: types.GET_CURRENTLIST,
                    payload: val
                });
            })
        }
    },
/*
    reqCollect(id) {
        return function (dispatch, getState) {
            reqCollects(id).then(data => {
                dispatch({
                    type: types.GET_GETLIST,
                    payload: data
                })
            })
        }
    },*/
};

export default actions