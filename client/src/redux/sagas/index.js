import { all } from "redux-saga/effects";
import AuthSagas from "./AuthSagas";

export default function* rootSaga() {
  yield all([AuthSagas()]);
}
