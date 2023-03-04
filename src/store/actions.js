import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN',  (user) => {
  console.log(user)
  return {
    user,
  }
});

const logOutAction = createAction( 'LOG_OUT', () => {
  return {
    user: null,
  }
});

export { logInAction, logOutAction };
