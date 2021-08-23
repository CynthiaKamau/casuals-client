import axios from 'axios';
import { setError } from './error';
import { LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_FETCH_REQUEST,
    USER_FETCHED,
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
    })
    
    )
    .catch(error => {
        // dispatch(setError(error.response.error, error.response.status)),
        dispatch({
        type: AUTH_ERROR
        });
    });

}

//register
export const register = ({ first_name, middle_name, last_name, username, phone_number, email, role_id, password, status}) => (dispatch) => {

    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({ first_name, middle_name, last_name, username, phone_number, email, role_id, password, status });

    axios.post('/client', body, config)
    .then(res => dispatch({
        type : REGISTER_SUCCESS,
        payload : res.data
    }) )
    .catch(error => dispatch(setError(error.message, error.status, 'REGISTER_FAIL')),
        dispatch({ type : REGISTER_FAIL}),
    );
}

//login
export const login = ({ phone_number, password}) => (dispatch) => {

    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({ phone_number, password});

    axios.post('/user/login', body, config)
    .then(res => dispatch({
        type : LOGIN_SUCCESS,
        payload : res.data}))
    .catch(error => dispatch(setError(error.message, error.status, 'LOGIN_FAIL')),
        dispatch({ type : LOGIN_FAIL})
    );

}

//logout
export const logout = () => {
    return {
        type: LOGOUT
    }
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

