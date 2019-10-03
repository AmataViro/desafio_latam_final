import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootProductReducer from './modules/product/';
import authReducer from './modules/auth/';

const reducers = combineReducers({
    producto: rootProductReducer,
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;