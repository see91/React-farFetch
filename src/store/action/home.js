 import * as types from '../action-types';
 import {getSwiper,getChoose,getGroom,getList1,getList2,getList3} from '../../api/home'

let actions = {
    reqSliders() {
        return function (dispatch, getState) {
            getSwiper().then(date => {
                dispatch({
                    type: types.GET_SLIDERS,
                    payload: date
                });
            })
        }
    },
    reqChoose(){
      return function (dispatch,getState) {
        getChoose().then(data=>{
          dispatch({
            type: types.GET_CHOOSE,
            payload:data
          })
        })
      }
    },
    reqGroom(){
      return function (dispatch,getState) {
        getGroom().then(data=>{
          dispatch({
            type: types.GET_GROOM,
            payload:data
          })
        })
      }
    },
    reqList1(){
      return function (dispatch,getState) {
        getList1().then(data=>{
          dispatch({
            type: types.GET_LIST1,
            payload:data
          })
        })
      }
    },
    reqList2(){
      return function (dispatch,getState) {
        getList2().then(data=>{
          dispatch({
            type: types.GET_LIST2,
            payload:data
          })
        })
      }
    },
    reqList3(){
      return function (dispatch,getState) {
        getList3().then(data=>{
          dispatch({
            type: types.GET_LIST3,
            payload:data
          })
        })
      }
    }
};

export default actions