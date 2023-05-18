import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { hotelReducer } from './hotelReducer';
import { formReducer } from './formReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  hotels: hotelReducer,
  form: formReducer,
});

export default persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
);
