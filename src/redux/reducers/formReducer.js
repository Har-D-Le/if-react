import { handleActions } from 'redux-actions'

//actions
import {
  setDestinationInfo,
  setDateFromInfo,
  setDateToInfo,
  setAdultsInfo,
  setChildrenInfo,
  setRoomsInfo,
  setChildrenAge,
} from '../actions'

//constants
import { initialFormState } from '../constants/initialState'

export const formReducer = handleActions(
  {
    [setDestinationInfo]: (state, { payload: search }) => {
      return {
        ...state,
        search,
      }
    },
    [setDateFromInfo]: (state, { payload: dateFrom }) => {
      return {
        ...state,
        dateFrom,
      }
    },
    [setDateToInfo]: (state, { payload: dateTo }) => {
      return {
        ...state,
        dateTo,
      }
    },
    [setAdultsInfo]: (state, { payload: adults }) => {
      return {
        ...state,
        adults,
      }
    },
    [setChildrenInfo]: (state, { payload: children }) => {
      return {
        ...state,
        children,
      }
    },
    [setRoomsInfo]: (state, { payload: rooms }) => {
      return {
        ...state,
        rooms,
      }
    },
    [setChildrenAge]: (state, { payload: childrenAge }) => {
      return {
        ...state,
        childrenAge,
      }
    },
  },
  initialFormState,
)
