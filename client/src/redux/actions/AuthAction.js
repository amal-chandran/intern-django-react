import { LOGIN_AUTH, REGISTER_AUTH, LOGOUT_AUTH } from "../types/AuthTypes";

export const login = payload => ({
  type: LOGIN_AUTH,
  payload
});

export const register = payload => ({
  type: REGISTER_AUTH,
  payload
});

export const logout = () => ({
  type: LOGOUT_AUTH,
  payload: {}
});
