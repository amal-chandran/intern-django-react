import { put, call, takeLatest } from "redux-saga/effects";
import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAIL,
  REGISTER_AUTH,
  REGISTER_AUTH_SUCCESS,
  REGISTER_AUTH_FAIL,
  LOGOUT_AUTH,
  LOGOUT_AUTH_SUCCESS
} from "../types/AuthTypes";
import { push } from "connected-react-router";
import { fetchPost } from "./../../helpers/APIHelper";

function* login(action) {
  try {
    const data = yield call(fetchPost, "auth/login", action.payload);
    yield put({ type: LOGIN_AUTH_SUCCESS, payload: data });
    yield put(push("/admin"));
  } catch (error) {
    yield put({ type: LOGIN_AUTH_FAIL, payload: error });
  }
}

function* register(action) {
  try {
    const data = yield call(fetchPost, "auth/register", action.payload);
    yield put({ type: REGISTER_AUTH_SUCCESS, payload: data });
    yield put(push("/admin"));
  } catch (error) {
    yield put({ type: REGISTER_AUTH_FAIL, payload: error });
  }
}

function* logout(action) {
  try {
    yield call(fetchPost, "auth/logout", action.payload);
    yield put({ type: LOGOUT_AUTH_SUCCESS });
  } catch (error) {}
  yield put(push("/"));
}

export default function* rootAuthSaga() {
  yield takeLatest(LOGIN_AUTH, login);
  yield takeLatest(REGISTER_AUTH, register);
  yield takeLatest(LOGOUT_AUTH, logout);
}
