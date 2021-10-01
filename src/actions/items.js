import axios from 'axios';
import { setError } from './error';
import { tokenConfig } from './auth';
import {
    WORKERS_SUCCESS,
    WORKERS_FETCH_REQUEST,
    WORKERS_FAIL,

    WORKER_PROFILE_SUCCESS,
    WORKER_PROFILE_REQUEST,
    WORKER_PROFILE_FAIL,

    CLIENTS_SUCCESS,
    CLIENTS_FETCH_REQUEST,
    CLIENTS_FAIL,

    CLIENT_PROFILE_SUCCESS,
    CLIENT_PROFILE_REQUEST,
    CLIENT_PROFILE_FAIL,

    JOBS_SUCCESS,
    JOBS_FETCH_REQUEST,
    JOBS_FAIL
} from '../actions/types';

export const getClients = () => {
    return function (dispatch, getState) {
        axios.get('/api/clients', tokenConfig(getState))
            .then(res => dispatch({ type: CLIENTS_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status)))
    };

}

// //get specific client
export const getClient = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/client/4`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status)))
    }
}


//get workers
export const getServiceProviders = () => {
    return function (dispatch, getState) {
        axios.get('/api/workers', tokenConfig(getState))
            .then(res => dispatch({ type: WORKERS_SUCCESS, payload: res.data})
            )
            .catch(error => dispatch(setError(error.error, error.status)))
    };

}

//get specific worker
export const getWorker = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/worker/3`, tokenConfig(getState))
            .then(res => dispatch({ type: WORKER_PROFILE_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status)))
    }
}


//get jobs
export const getJobs = () => {
    return function (dispatch, getState) {
        axios.get('/api/jobs', tokenConfig(getState))
            .then(res => dispatch({ type: JOBS_SUCCESS, payload: res.data})
            )
            .catch(error => dispatch(setError(error.error, error.status)))
    };
}


