import axios from 'axios';
import { setError, clearError } from './error';
import { LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_FETCH_REQUEST,
    LOGOUT,
    AUTH_ERROR } from '../actions/types';

//check user and load user
export const loadUser = (dispatch, getState) => {

    //user loading
    dispatch({ type : USER_FETCH_REQUEST})

    axios.get(``, tokenConfig(getState))
    .then(res => dispatch({
        type : USER_FETCHED,
        payload : res
    }))
    .catch(error => dispatch({ setError() }),
        dispatch({
        type : AUTH_ERROR,
    }))

}

export const tokenConfig = getState => {

    //get token from local storage
    const token = getState.auth.token;

    //headers
    let config = {
        headers : {
            "Content-type" : "application/json"
        }
    }

    //if token add to headers
    if(token) {
        config.headers['Authorization'] = token;
    }

    return config;

}

