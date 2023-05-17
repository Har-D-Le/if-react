import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN', (user) => ({
  user,
}));

const logOutAction = createAction('LOG_OUT', () => ({
  user: null,
}));

export { logInAction, logOutAction };
