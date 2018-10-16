import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureInterceptor } from 'api/helper';
import reducers from 'reducers';
import sagas from 'sagas';

let middlewares;
let store;
const sagaMiddleware = createSagaMiddleware();
const ENV = process.env.NODE_ENV;

if (ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares = applyMiddleware(sagaMiddleware, logger);
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

const configureStore = () => {
  const store = createStore(reducers, middlewares);
  sagaMiddleware.run(sagas);
  configureInterceptor();

  return { store };
};


export default configureStore;
