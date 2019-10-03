import { combineReducers } from 'redux';

import getAll from './get-all.reducer';
import get from './get.reducer';
import create from './create.reducer';


const rootReducerUser = combineReducers({
    getAll,
    get,
    create,
});

export default rootReducerUser;