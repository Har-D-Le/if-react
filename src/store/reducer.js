import { combineActions, handleActions } from 'redux-actions';
import { logInAction, logOutAction } from './actions';

const defaultState = {
  user: null,
};

const reducer = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state, payload) => {
        console.log(payload, 'payload')
        return {
            ...state,
            user: payload?.payload.user,
        }
    },
  },
  defaultState,
);

export { reducer, defaultState };
