import { store } from "./../redux/store";
const BackendBaseUrl = "http://localhost:8000/api/";

export const fetchAPI = (path, method, body) => {
  const headers = {
    "Content-Type": "application/json"
  };

  const init = {
    method,
    headers
  };

  if (body) {
    init["body"] = JSON.stringify(body);
  }

  if (store.getState().auth.isLogined)
    headers["Authorization"] = "Token " + store.getState().auth.token;

  return fetch(BackendBaseUrl + path, init).then(response => {
    if (response.ok) {
      if (response.statusText === "No Content") return;
      return response.json();
    } else {
      throw new Error("API Error");
    }
  });
};

export const fetchPost = (path, body) => fetchAPI(path, "POST", body);
export const fetchPut = (path, body) => fetchAPI(path, "PUT", body);
export const fetchPatch = (path, body) => fetchAPI(path, "PATCH", body);
export const fetchGet = path => fetchAPI(path, "GET");
export const fetchDelete = path => fetchAPI(path, "DELETE");
