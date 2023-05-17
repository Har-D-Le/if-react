import { handleActions } from 'redux-actions';

import {
  setDestinationInfo,
  setDateFromInfo,
  setDateToInfo,
  setAdultsInfo,
  setChildrenInfo,
  setRoomsInfo,
  setChildrenAge,
} from '../actions';

import { initialFormState } from '../constants/initialState';

export const formReducer = handleActions(
  {
    [setDestinationInfo]: (state, { payload: search }) => ({
      ...state,
      search,
    }),
    [setDateFromInfo]: (state, { payload: dateFrom }) => ({
      ...state,
      dateFrom,
    }),
    [setDateToInfo]: (state, { payload: dateTo }) => ({
      ...state,
      dateTo,
    }),
    [setAdultsInfo]: (state, { payload: adults }) => ({
      ...state,
      adults,
    }),
    [setChildrenInfo]: (state, { payload: children }) => ({
      ...state,
      children,
    }),
    [setRoomsInfo]: (state, { payload: rooms }) => ({
      ...state,
      rooms,
    }),
    [setChildrenAge]: (state, { payload: childrenAge }) => ({
      ...state,
      childrenAge,
    }),
  },
  initialFormState,
);
