import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_LOGOUT,
} from './login.const';

import { loginService } from './../../../services/login.service';

export const logoutActionCreator = () => ({
    type: AUTH_LOGOUT,
    payload: null,
})

const startActionCreator = () => ({
    type: AUTH_LOGIN_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: AUTH_LOGIN_ERROR,
    payload: errorMessage,
})

export const loginActionsAsyncCreator = (email, password) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());

        loginService({username: email, password: password }).then(data => {
            localStorage['token']= data.token;
            if(data.message === 'success'){
                dispatch(successActionCreator(data.token));
            }else{
                dispatch(errorActionCreator(data.message));
            }
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}