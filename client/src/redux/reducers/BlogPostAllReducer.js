import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAIL,
  LOAD_SINGLE,
  LOAD_SINGLE_SUCCESS,
  LOAD_SINGLE_FAIL
} from "./../types/BlogPostAllTypes";

const initialState = {
  postList: [],
  postData: {},
  loadingList: false,
  loadingSingle: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ALL:
      return { ...state, postList: [], loadingList: true };
    case LOAD_ALL_SUCCESS:
      return { ...state, postList: payload, loadingList: false };
    case LOAD_ALL_FAIL:
      return { ...state, postList: [], loadingList: false };
    case LOAD_SINGLE:
      return { ...state, postData: {}, loadingSingle: true };
    case LOAD_SINGLE_SUCCESS:
      return { ...state, postData: payload, loadingSingle: false };
    case LOAD_SINGLE_FAIL:
      return { ...state, postData: {}, loadingSingle: false };
    default:
      return state;
  }
};
