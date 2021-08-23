import axios from 'axios';
import { setError } from './error';
import {WORKERS_SUCCESS,
    WORKERS_FETCH_REQUEST,
    WORKERS_FAIL,
    CLIENTS_SUCCESS,
    CLIENTS_FETCH_REQUEST,
    CLIENTS_FAIL,
    JOBS_SUCCESS,
    JOBS_FETCH_REQUEST,
    JOBS_FAIL } from '../actions/types';

//get clients
export const getClients = () => {
    return function(dispatch) {
        // dispatch(CLIENTS_FETCH_REQUEST)
        axios.get('/clients')
        .then(res => dispatch({ type : CLIENTS_SUCCESS, payload : res.data.data})
            )
        .catch(error => dispatch(setError(error.response.data, error.response.status)) )
    };
    
}

//get clients
export const getServiceProviders = () => {
    return function(dispatch) {
        // dispatch(WORKERS_FETCH_REQUEST)
        axios.get('/workers')
        .then(res => dispatch({ type : WORKERS_SUCCESS, payload : res.data.data})
            )
        .catch(error => dispatch(setError(error.response.data, error.response.status)) )
    };
    
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
