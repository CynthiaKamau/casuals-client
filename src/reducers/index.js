import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import error from './error';
import auth from './auth';
import item from './item';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'item']
}

const rootReducer = combineReducers({
    error : error,
    auth : auth,
    items : item
})

export default persistReducer(persistConfig, rootReducer);