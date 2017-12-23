import * as types from '../action-types';
import {reg, login, logout, validate} from '../../api/user'
import {push} from 'react-router-redux';
import history from '../history';

export default {
    det(user) {
        return function (dispatch, getState) {
            reg(user).then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.REG,
                    payload: result
                });
                if (code == 0) {
                    dispatch(push('/login'))
                }
            })
        }
    },
    login(user) {
        return function (dispatch, getState) {
            login(user).then(result => {
                let {code, success, error, userId} = result;
                dispatch({
                    type: types.LOGIN,
                    payload: {success, error, userId}
                });
                if (code == 0) {
                    dispatch(push('/user'));
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
