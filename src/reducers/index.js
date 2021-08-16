import error from './error';
import auth from './auth';
import itemReducer from './item';
import { combineReducers } from 'redux';

export default combineReducers({
    item : itemReducer,
    error : error,
    auth : auth
})