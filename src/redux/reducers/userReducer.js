import { combineActions, handleActions } from 'redux-actions';
import { logInAction, logOutAction } from '../actions';

const defaultState = {
  user: null,
};

const userReducer = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state, action) => {
      debugger
        return {
        ...state,
        user: action.payload,
      };
    },
  },
  defaultState,
);

export { userReducer };
