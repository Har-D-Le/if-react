import { call, put, takeLatest, select } from 'redux-saga/effects'

//actions
import {
  getAvailableHotels,
  setAvailableHotels,
} from '../actions'

//requests
import { httpGet } from '../constants/request'
import { availableHotelsUrl } from '../constants/urls'

function* getHotelSaga({ type }) {
  try {
    if (type === getAvailableHotels.toString()) {
      const queryParams = yield select(({ form }) => form)
      const available = yield call(httpGet, availableHotelsUrl, queryParams)
      yield put(setAvailableHotels(available))
    }
  } catch (err) {
    console.log('Error:', err.message)
  }
}

function* hotelSaga() {
  yield takeLatest(getAvailableHotels.toString(), getHotelSaga)
}

export default hotelSaga
