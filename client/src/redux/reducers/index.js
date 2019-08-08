import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AuthReducer from "./AuthReducer";

export default history =>
  combineReducers({ router: connectRouter(history), auth: AuthReducer });
