import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAIL,
  REGISTER_AUTH_SUCCESS,
  REGISTER_AUTH_FAIL
} from "./../types/authTypes";

const initialState = {
  user: {},
  token: "",
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_AUTH_SUCCESS:
      return { ...state, ...payload };

    case LOGIN_AUTH_FAIL:
      return { ...state, error: payload };

    case REGISTER_AUTH_SUCCESS:
      return { ...state, ...payload };

    case REGISTER_AUTH_FAIL:
      return { ...state, error: payload };

    default:
      return state;
  }
};
