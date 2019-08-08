import { LOGIN_AUTH } from "./../types/authTypes";

export const login = payload => ({
  type: LOGIN_AUTH,
  payload
});
