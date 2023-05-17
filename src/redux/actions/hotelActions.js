import { createActions } from 'redux-actions';

export const {
  getAvailableHotels,
  setAvailableHotels,
} = createActions(
  'GET_AVAILABLE_HOTELS',
  'SET_AVAILABLE_HOTELS',
);
