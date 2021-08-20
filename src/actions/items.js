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
export const getClients = () => (dispatch) => {
    dispatch( setClientsLoading());
    axios.get('/clients')
    .then(res => dispatch({ type : CLIENTS_SUCCESS, payload : res.data}) )
    .catch(error => dispatch(setError(error.response.data, error.response.status)) )
}

export const setClientsLoading = () => {
    return {
      type: CLIENTS_FETCH_REQUEST
    };
};