import { LOGIN_AUTH, REGISTER_AUTH } from "./../types/authTypes";

export const login = payload => ({
  type: LOGIN_AUTH,
  payload
});

export const register = payload => ({
  type: REGISTER_AUTH,
  payload
});
