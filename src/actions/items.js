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
    JOBS_FAIL,
    JOB_SUCCESS,
    JOB_EDIT_SUCCESS,
    JOB_DELETE_SUCCESS,
    CLIENT_PROFILE_EDIT_SUCCESS,
    CLIENT_PROFILE_DELETE_SUCCESS
} from '../actions/types';

export const getClients = () => {
    return function (dispatch, getState) {
        axios.get('/api/clients', tokenConfig(getState))
            .then(res => dispatch({ type: CLIENTS_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status)))
    };
}

//get specific client
export const getClient = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/client/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status)))
    }
}

//edit specific client
export const editClient = (id) => {
    return function (dispatch, getState) {
        axios.put(`/api/client/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_EDIT_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status)))
    }
}

//delete specific client
export const deleteClient = (id) => {
    return function (dispatch, getState) {
        axios.delete(`/api/client/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_DELETE_SUCCESS, payload: res.data })
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

//get specific job
export const getJob = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/job/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: JOB_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status)))
    }
}

//edit specific job
export const editJob = (id) => {
    return function (dispatch, getState) {
        axios.put(`/api/job/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: JOB_EDIT_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status)))
    }
}

//DELETE specific job
export const deleteJob = (id) => {
    return function (dispatch, getState) {
        axios.delete(`/api/job/${id}`, tokenConfig(getState))
            .then((res) => {
                console.log("delete resp", res.data)
                dispatch({ type: JOB_DELETE_SUCCESS, payload: res.data })
                dispatch(getClients())
            })
            .catch(error => dispatch(setError(error.error, error.status)))
    }
}


