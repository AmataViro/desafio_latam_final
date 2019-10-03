import { combineReducers } from 'redux';
import productReducer from './product.reducer';

const rootProductReducer = combineReducers({
    getAll: productReducer,
})

export default rootProductReducer;