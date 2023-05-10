import { createActions } from 'redux-actions'

export const {
  setDestinationInfo,
  setDateFromInfo,
  setDateToInfo,
  setAdultsInfo,
  setChildrenInfo,
  setRoomsInfo,
  setChildrenAge,
} = createActions(
  'SET_DESTINATION_INFO',
  'SET_DATE_FROM_INFO',
  'SET_DATE_TO_INFO',
  'SET_ADULTS_INFO',
  'SET_CHILDREN_INFO',
  'SET_ROOMS_INFO',
  'SET_CHILDREN_AGE',
)
