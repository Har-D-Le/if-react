import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { hotelReducer } from './hotelReducer'
import { formReducer } from './formReducer'

const rootReducer = combineReducers({
  hotels: hotelReducer,
  form: formReducer,
})

export default persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
)
