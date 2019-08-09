import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAIL,
  LOAD_SINGLE,
  LOAD_SINGLE_SUCCESS,
  LOAD_SINGLE_FAIL,
  CREATE,
  CREATE_SUCCESS,
  CREATE_FAIL,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DELETE,
  DELETE_SUCCESS,
  DELETE_FAIL
} from "./../types/BlogPostTypes";
import { push } from "connected-react-router";
import {
  fetchPost,
  fetchGet,
  fetchPatch,
  fetchDelete
} from "./../../helpers/APIHelper";

function* load_all() {
  try {
    const data = yield call(fetchGet, "blog/admin");
    yield put({ type: LOAD_ALL_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LOAD_ALL_FAIL, payload: error });
  }
}

function* load_single(action) {
  try {
    const data = yield call(fetchGet, "blog/admin/" + action.payload);
    yield put({ type: LOAD_SINGLE_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LOAD_SINGLE_FAIL, payload: error });
  }
}

function* create_post(action) {
  try {
    const data = yield call(fetchPost, "blog/admin/", action.payload);
    yield put({ type: CREATE_SUCCESS, payload: data });
    yield put(push("/admin/post/" + data.id));
  } catch (error) {
    yield put({ type: CREATE_FAIL, payload: error });
  }
}

function* update_post(action) {
  try {
    const data = yield call(
      fetchPatch,
      "blog/admin/" + action.payload.id + "/",
      action.payload.data
    );
    yield put({ type: UPDATE_SUCCESS, payload: data });
    yield put(push("/admin/post/" + data.id));
  } catch (error) {
    yield put({ type: UPDATE_FAIL, payload: error });
  }
}

function* delete_post(action) {
  try {
    const data = yield call(
      fetchDelete,
      "blog/admin/" + action.payload.id + "/"
    );
    yield put({ type: DELETE_SUCCESS });
    yield put(push("/admin"));
  } catch (error) {
    yield put({ type: DELETE_FAIL, payload: error });
  }
}

export default function* rootBlogPostSaga() {
  yield all([
    yield takeLatest(LOAD_ALL, load_all),
    yield takeLatest(LOAD_SINGLE, load_single),
    yield takeLatest(CREATE, create_post),
    yield takeLatest(UPDATE, update_post),
    yield takeLatest(DELETE, delete_post)
  ]);
}
