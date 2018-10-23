import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';

// create store and middlewares
const store = createStore(reducer, applyMiddleware(logger));

export default store;
