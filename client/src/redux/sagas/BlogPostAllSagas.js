import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAIL,
  LOAD_SINGLE,
  LOAD_SINGLE_SUCCESS,
  LOAD_SINGLE_FAIL
} from "./../types/BlogPostAllTypes";
import { fetchGet } from "./../../helpers/APIHelper";

function* load_all() {
  try {
    const data = yield call(fetchGet, "blog");
    yield put({ type: LOAD_ALL_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LOAD_ALL_FAIL, payload: error });
  }
}

function* load_single(action) {
  try {
    const data = yield call(fetchGet, "blog/" + action.payload);
    yield put({ type: LOAD_SINGLE_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LOAD_SINGLE_FAIL, payload: error });
  }
}

export default function* rootBlogPostSaga() {
  yield all([
    yield takeLatest(LOAD_ALL, load_all),
    yield takeLatest(LOAD_SINGLE, load_single)
  ]);
}
