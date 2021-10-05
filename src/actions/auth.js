import axios from 'axios';
import { setError } from './error';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_FETCH_REQUEST,
    USER_FETCHED,
    UPDATE_USER_FAIL,
    UPDATE_USER_SUCCESS,
    LOGOUT,
    AUTH_ERROR
} from '../actions/types';

//check user and load user
export const loadUser = (dispatch, getState) => {

    //user loading
    dispatch({ type: USER_FETCH_REQUEST })

    axios.get(`/user/auth`, tokenConfig(getState))
        .then(res => dispatch({
            type: USER_FETCHED,
            payload: res
        })

        )
        .catch(error => dispatch(setError(error.message, error.status, 'AUTH_ERROR')),
            dispatch({ type: AUTH_ERROR }),
        );

}

//register
export const register = ({ first_name, middle_name, last_name, username, phone_number, email, role_id, password, status }) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ first_name, middle_name, last_name, username, phone_number, email, role_id, password, status });

    axios.post('/api/client', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(error => dispatch(setError(error.error, error.status, 'REGISTER_FAIL')),
            dispatch({ type: REGISTER_FAIL }),
        );
}

//login
export const login = ({ phone_number, password }) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ phone_number, password });

    axios.post('/user/login', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }),)
        .catch(error => dispatch(setError(error.message, error.status, 'LOGIN_FAIL')),
            dispatch({ type: LOGIN_FAIL })
        );

}

//update profile
export const update_profile = ({id, first_name, middle_name, last_name, phone_number, email}) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({id,first_name, middle_name, last_name, phone_number, email});

    axios.post('/update-profile', body, config)
        .then(res => dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: res.data
        }))
        .catch(error => dispatch(setError(error.message, error.status, 'UPDATE_USER_FAIL')),
            dispatch({ type: UPDATE_USER_FAIL}),
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
    const token = getState().auth.token;

    //headers
    let config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //if token add to headers
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;

}

