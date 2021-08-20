import {WORKERS_SUCCESS,
    WORKERS_FETCH_REQUEST,
    WORKERS_FAIL,
    CLIENTS_SUCCESS,
    CLIENTS_FETCH_REQUEST,
    CLIENTS_FAIL,
    JOBS_SUCCESS,
    JOBS_FETCH_REQUEST,
    JOBS_FAIL } from '../actions/types';

const initialState = {
    items : [],
    isLoading : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case WORKERS_FETCH_REQUEST :
        case CLIENTS_FETCH_REQUEST :
        case JOBS_FETCH_REQUEST : 
            return {
                ...state,
                isLoading: true
            }

        case WORKERS_SUCCESS :
        case CLIENTS_SUCCESS :
        case JOBS_SUCCESS :
            return {
                ...state,
                items : action.payload,
                isLoading : false
            }

        case WORKERS_FAIL :
        case CLIENTS_FAIL :
        case JOBS_FAIL :
            return {
                ...state,
                isLoading: false,
                items : null
            }
        
        default : return state;
    }
}