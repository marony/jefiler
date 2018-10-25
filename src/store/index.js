import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';
import rootSaga from './sagas';

// create store and middlewares
export default function configureStore(initialState) {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware, logger
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
