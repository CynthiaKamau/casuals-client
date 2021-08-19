import {GET_ERRORS, CLEAR_ERRORS} from './types';

//Return erors
export const setError = (message) => ({
    type: GET_ERRORS,
    payload: { message}
    // payload: { message, status, id}
});

// Clear errors
export const clearError = () => ({
    type: CLEAR_ERRORS
});



