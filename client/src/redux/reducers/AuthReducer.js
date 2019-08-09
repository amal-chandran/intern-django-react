import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAIL,
  REGISTER_AUTH_SUCCESS,
  REGISTER_AUTH_FAIL,
  LOGOUT_AUTH_SUCCESS
} from "../types/AuthTypes";

const initialState = {
  user: {},
  token: "",
  error: {},
  isLogined: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_AUTH_SUCCESS:
      return { ...state, ...payload, isLogined: true };

    case LOGIN_AUTH_FAIL:
      return { ...state, error: payload, isLogined: false };

    case REGISTER_AUTH_SUCCESS:
      return { ...state, ...payload, isLogined: true };

    case REGISTER_AUTH_FAIL:
      return { ...state, error: payload, isLogined: false };

    case LOGOUT_AUTH_SUCCESS:
      return initialState;

    default:
      return state;
  }
};
