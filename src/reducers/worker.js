import {WORKERS_SUCCESS,
    WORKERS_FETCH_REQUEST,
    WORKERS_FAIL,

    WORKER_PROFILE_SUCCESS,
    WORKER_PROFILE_FETCH_REQUEST,
    WORKER_PROFILE_FAIL } from '../actions/types';

const initialState = {
    items : [],
    item: [],
    isLoading : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case WORKER_PROFILE_FETCH_REQUEST :
        case WORKERS_FETCH_REQUEST :
            return {
                ...state,
                isLoading: true
            }

        case WORKER_PROFILE_SUCCESS :
            return {
                ...state,
                item : action.payload.message,
                isLoading : false
            }
        case WORKERS_SUCCESS :
            return {
                ...state,
                items : action.payload.message,
                isLoading : false
            }

        case WORKER_PROFILE_FAIL :
            return {
                ...state,
                isLoading: false,
                item : null
            }
        case WORKERS_FAIL :
            return {
                ...state,
                isLoading: false,
                items : null
            }
        
        default : return state;
    }
}