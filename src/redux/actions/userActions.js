import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN');

const logOutAction = createAction('LOG_OUT');

export { logInAction, logOutAction };
