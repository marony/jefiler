import { combineReducers } from 'redux';
import calculator from './calculator';

// combine all reducers
const reducer = combineReducers({
  calculator,
});

export default reducer;
