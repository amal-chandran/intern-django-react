import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AuthReducer from "./AuthReducer";
import BlogPostReducer from "./BlogPostReducer";
import BlogPostAllReducer from "./BlogPostAllReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    blogPost: BlogPostReducer,
    blogPostAll: BlogPostAllReducer
  });
