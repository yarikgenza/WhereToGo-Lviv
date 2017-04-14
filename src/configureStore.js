import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';

import rootReducer from './Redux/Reducers';

export default function configureStore(initialState) {
  /**
   * Create store with remote-devtools and logger middleware. Do it only
   * in development to reduce performance issues.
   */
  if (__DEV__) {
    // const createLogger = require('redux-logger')
    // const logger = createLogger()

    const finalCreateStore = compose(
      applyMiddleware(thunkMiddleware, promise),
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    return store;
  }
    // const finalCreateStore = compose(applyMiddleware(thunkMiddleware), devTools())(createStore)
  const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
