import { handleActions } from 'redux-actions';

// actions
import { setAvailableHotels } from '../actions';

// constants
import { initialHotelState } from '../constants/initialState';

export const hotelReducer = handleActions(
  {
    [setAvailableHotels]: (state, { payload: available }) => ({
      ...state,
      available,
    }),
  },
  initialHotelState,
);
