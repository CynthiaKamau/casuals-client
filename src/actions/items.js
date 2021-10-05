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
    JOB_FAIL,
    JOB_EDIT_SUCCESS,
    JOB_EDIT_FAIL,
    JOB_DELETE_SUCCESS,

    CLIENT_PROFILE_EDIT_SUCCESS,
    CLIENT_PROFILE_DELETE_SUCCESS,
    JOB_ADD_SUCCESS,
    JOB_ADD_FAIL,
    JOB_DELETE_FAIL,
    CLIENT_PROFILE_EDIT_FAIL
} from '../actions/types';

export const getClients = () => {
    return function (dispatch, getState) {
        axios.get('/api/clients', tokenConfig(getState))
            .then(res => dispatch({ type: CLIENTS_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status, 'CLIENTS_FAIL')),
                dispatch({ type: CLIENTS_FAIL }))
    };
}

//get specific client
export const getClient = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/client/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status, 'CLIENT_PROFILE_FAIL')),
                dispatch({ type: CLIENT_PROFILE_FAIL }))
    }
}

//edit specific client
export const editClient = (id) => {
    return function (dispatch, getState) {
        axios.put(`/api/client/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_EDIT_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status, 'CLIENT_PROFILE_EDIT_FAIL')),
                dispatch({ type: CLIENT_PROFILE_EDIT_FAIL }))
    }
}

//delete specific client
export const deleteClient = (id) => {
    return function (dispatch, getState) {
        axios.delete(`/api/client/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: CLIENT_PROFILE_DELETE_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.data, error.status, 'CLIENT_PROFILE_DELETE_SUCCESS')),
                dispatch({ type: CLIENT_PROFILE_DELETE_SUCCESS }))
    }
}

//get workers
export const getServiceProviders = () => {
    return function (dispatch, getState) {
        axios.get('/api/workers', tokenConfig(getState))
            .then(res => dispatch({ type: WORKERS_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status, 'WORKERS_FAIL')),
                dispatch({ type: WORKERS_FAIL }))
    };

}

//get specific worker
export const getWorker = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/worker/3`, tokenConfig(getState))
            .then(res => dispatch({ type: WORKER_PROFILE_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status, 'WORKER_PROFILE_FAIL')),
                dispatch({ type: WORKER_PROFILE_FAIL }))
    }
}

//get jobs
export const getJobs = () => {
    return function (dispatch, getState) {
        axios.get('/api/jobs', tokenConfig(getState))
            .then(res => dispatch({ type: JOBS_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status, 'JOBS_FAIL')),
            //dispatch({ type: JOBS_FAIL})
        );
    };
}

//get specific job
export const getJob = (id) => {
    return function (dispatch, getState) {
        axios.get(`/api/job/${id}`, tokenConfig(getState))
            .then(res => dispatch({ type: JOB_SUCCESS, payload: res.data })
            )
            .catch(error => dispatch(setError(error.error, error.status, 'JOB_FAIL')),
                dispatch({ type: JOB_FAIL })
            );
    }
}

//add job
export const addJob = (client_id, title, description, date_added, validity, preferance, location, rating, status) => (dispatch, getState) => {

    const body = JSON.stringify({ client_id, title, description, date_added, validity, preferance, location, rating, status });
    console.log("postbody", body)

    axios.post('/api/job', body, tokenConfig(getState))
        .then((res) => { 
            dispatch({ type: JOB_ADD_SUCCESS,payload: res.data})
        })
        .catch((error) => {
            dispatch(setError(error.error, error.status, 'JOB_ADD_FAIL'))
            dispatch({ type: JOB_ADD_FAIL, payload: error.error })
        });

}

//edit job
export const editJob = (id, client_id, title, description, date_added, validity, preferance, location, rating, status) => (dispatch, getState) => {

    const body = JSON.stringify({ id, client_id, title, description, date_added, validity, preferance, location, rating, status });
    console.log("postbody", body)

    axios.put(`/api/job/${id}`, body, tokenConfig(getState))
        .then((res) => { 
            dispatch({ type: JOB_EDIT_SUCCESS, payload: res.data})
        })
        .catch((error) => {
            dispatch(setError(error.error, error.status, 'JOB_EDIT_FAIL'))
            dispatch({ type: JOB_EDIT_FAIL, payload: error.error })
            console.log("edit error", error)
        });

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
            .catch(error => dispatch(setError(error.error, error.status, 'JOB_DELETE_FAIL')),
                dispatch({ type: JOB_DELETE_FAIL })
            );
    }
}


