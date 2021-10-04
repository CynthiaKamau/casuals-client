import {CLIENTS_SUCCESS,
    CLIENTS_FETCH_REQUEST,
    CLIENTS_FAIL,

    CLIENT_PROFILE_SUCCESS,
    CLIENT_PROFILE_FETCH_REQUEST,
    CLIENT_PROFILE_FAIL,

    CLIENT_PROFILE_EDIT_SUCCESS,
    CLIENT_PROFILE_EDIT_FAIL,
    CLIENT_PROFILE_DELETE_SUCCESS,
    CLIENT_PROFILE_DELETE_FAIL} from '../actions/types';

const initialState = {
    items : [],
    item: [],
    isLoading : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CLIENT_PROFILE_FETCH_REQUEST :
        case CLIENTS_FETCH_REQUEST :
            return {
                ...state,
                isLoading: true
            }

        case CLIENT_PROFILE_SUCCESS :
        case CLIENT_PROFILE_EDIT_SUCCESS :
            return {
                ...state,
                item : action.payload.message,
                isLoading : false
            }
        case CLIENTS_SUCCESS :
            return {
                ...state,
                items : action.payload.message,
                isLoading : false
            }

        case CLIENT_PROFILE_FAIL :
        case CLIENT_PROFILE_EDIT_FAIL :
            return {
                ...state,
                isLoading: false,
                item : null
            }
        case CLIENTS_FAIL :
            return {
                ...state,
                isLoading: false,
                items : null
            }
        
        default : return state;
    }
}