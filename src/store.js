import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers, rootSaga } from './ducks';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const applyMiddlewares = composeWithDevTools(applyMiddleware(
    sagaMiddleware, thunkMiddleware, createLogger()
  ));
  const store = createStore(
    reducers,
    initialState,
    applyMiddlewares
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
