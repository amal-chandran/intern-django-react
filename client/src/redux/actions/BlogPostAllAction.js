import { LOAD_ALL, LOAD_SINGLE } from "./../types/BlogPostAllTypes";

export const load_posts = () => ({
  type: LOAD_ALL
});

export const load_post = payload => ({
  type: LOAD_SINGLE,
  payload
});
