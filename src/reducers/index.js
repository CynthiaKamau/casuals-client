import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import error from './error';
import auth from './auth';
import client from './client';
import worker  from "./worker";
import job from "./job";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'item']
}

const rootReducer = combineReducers({
    error : error,
    auth : auth,
    job : job,
    worker : worker,
    client: client
})

export default persistReducer(persistConfig, rootReducer);