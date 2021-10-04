import {JOBS_SUCCESS,
    JOBS_FETCH_REQUEST,
    JOBS_FAIL,
    JOB_SUCCESS,
    JOB_FETCH_REQUEST,
    JOB_FAIL,
    JOB_EDIT_SUCCESS,
    JOB_EDIT_FAIL,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL } from '../actions/types';

const initialState = {
    items : [],
    item: [],
    isLoading : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case JOBS_FETCH_REQUEST : 
        case JOB_FETCH_REQUEST :
            return {
                ...state,
                isLoading: true
            }

        case JOBS_SUCCESS :
            return {
                ...state,
                items : action.payload.message,
                isLoading : false
            }
        case JOB_SUCCESS :
        case JOB_EDIT_SUCCESS :
        case JOB_DELETE_SUCCESS :
            return {
                ...state,
                item : action.payload.message,
                isLoading : false
            }

        case JOBS_FAIL :
            return {
                ...state,
                isLoading: false,
                items : null
            }
        case JOB_FAIL :
        case JOB_EDIT_FAIL :
        case JOB_DELETE_FAIL :
            return {
                ...state,
                isLoading: false,
                item : null
            }
        
        default : return state;
    }
}