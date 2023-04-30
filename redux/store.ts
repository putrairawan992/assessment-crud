import { configureStore, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import rootReducer from './slices';
import rootSaga from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(middlewares),
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper(makeStore, { debug: true });
