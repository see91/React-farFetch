import * as types from '../action-types';
import {reg, login, logout, validate} from '../../api/session'
import {push} from 'react-router-redux';

export default {
    det(user) {
        return function (dispatch, getState) {
            reg(user).then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.det,
                    payload: {success, error}
                });
                if (code == 0) {
                    dispatch(push('/home'))
                }
            })
        }
    },
    login(user) {
        return function (dispatch, getState) {
            login(user).then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.LOGIN,
                    payload: {success, error, user}
                });
                if (code == 0) {
                    dispatch(push('/login'))
                }
            })
        }
    },
    logout() {
        return function (dispatch, getState) {
            logout().then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.LOGOUT,
                    payload: {success, error}
                });
                dispatch(push('/login'))
            })
        }
    },
    clearMessages() {
        return {
            type: types.CLEAR_MESSAGES
        }
    },
    validate() {
        return function (dispatch, getState) {
            validate().then(result => {
                let {code, success, error, user} = result;
                dispatch({
                    type: types.VALIDATE,
                    payload: {success, error, user}
                })
            })
        }
    }
}
