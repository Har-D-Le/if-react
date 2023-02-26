import { createAction } from 'redux-actions';

const logInAction = createAction(() => ({
  type: LOG_IN,
  payload,
}));

const logOutAction = createAction(() => ({
  type: LOG_OUT,
}));

export { logInAction, logOutAction };
