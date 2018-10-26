import {combineReducers} from 'redux';
import filer from './filer';

// combine all reducers
const rootReducer = combineReducers({
    filer,
});

export default rootReducer;
