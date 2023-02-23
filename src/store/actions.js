import { LOG_IN, LOG_OUT } from './actionTypes';

export const logInAction = (payload) => ({
  type: LOG_IN,
  payload,
});

export const logOutAction = () => ({
  type: LOG_OUT,
});

// export default {
//   logInAction,
//   logOutAction,
// };
