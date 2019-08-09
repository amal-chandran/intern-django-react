import {
  LOAD_ALL,
  LOAD_SINGLE,
  CREATE,
  UPDATE,
  DELETE
} from "./../types/BlogPostTypes";

export const load_posts = () => ({
  type: LOAD_ALL
});

export const load_post = payload => ({
  type: LOAD_SINGLE,
  payload
});

export const create_post = payload => ({
  type: CREATE,
  payload
});

export const update_post = (id, data) => ({
  type: UPDATE,
  payload: {
    id,
    data
  }
});

export const delete_post = id => ({
  type: DELETE,
  payload: {
    id
  }
});
