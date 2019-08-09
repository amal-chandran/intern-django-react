import { all } from "redux-saga/effects";
import AuthSagas from "./AuthSagas";
import BlogPostSagas from "./BlogPostSagas";
import BlogPostAllSagas from "./BlogPostAllSagas";

export default function* rootSaga() {
  yield all([AuthSagas(), BlogPostSagas(), BlogPostAllSagas()]);
}
