import { combineActions, handleActions } from 'redux-actions';
import { logInAction, logOutAction } from './actions';

const defaultState = {
  user: null,
};

const reducer = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state, payload) => ({
      ...state,
      user: payload,
    }),
  },
  defaultState,
);

export { reducer, defaultState };
