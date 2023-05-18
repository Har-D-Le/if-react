import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import hotelSaga from './saga/hotelSaga';

import rootReducer from './reducers';

import middleWare, { sagaMiddleware } from './middleware';

const composeEnhancers = composeWithDevTools({});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // composeEnhancers(applyMiddleware(...middleWare)),
  );

  // sagaMiddleware.run(hotelSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

export const { store, persistor } = configureStore();
