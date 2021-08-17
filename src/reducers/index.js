import error from './error';
import auth from './auth';
import itemReducer from './item';
import { combineReducers } from 'redux';

export default combineReducers({
    error : error,
    auth : auth
})