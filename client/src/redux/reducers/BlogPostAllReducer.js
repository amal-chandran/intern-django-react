import {
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAIL,
  LOAD_SINGLE_SUCCESS,
  LOAD_SINGLE_FAIL
} from "./../types/BlogPostAllTypes";

const initialState = {
  postList: [],
  postData: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ALL_SUCCESS:
      return { ...state, postList: payload };
    case LOAD_ALL_FAIL:
      return { ...state, postList: [] };
    case LOAD_SINGLE_SUCCESS:
      return { ...state, postData: payload };
    case LOAD_SINGLE_FAIL:
      return { ...state, postData: {} };
    default:
      return state;
  }
};
