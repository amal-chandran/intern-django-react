import { put, call, takeLatest } from "redux-saga/effects";
import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAIL
} from "./../types/authTypes";
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

export default function* rootAuthSaga() {
  yield takeLatest(LOGIN_AUTH, login);
}
