import * as actionType from './ActionType';

export const logein = () => ({
  type: actionType.LOGIN,
  payload: true
});

export const signout = () => ({
  type: actionType.SIGNEOUT,
  payload: false
});