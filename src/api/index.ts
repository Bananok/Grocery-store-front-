import axios from "axios";
import { actions, store } from "store";

export const BASE_URL = "http://localhost:8000/";

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (!token) {
    return config;
  }

  const Authorization = `Bearer ${token}`;

  return {
    ...config,
    headers: { ...config.headers, Authorization },
  };
});
api.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      store.dispatch(actions.auth.logout());
    }
    return response;
  },
  (error) => {
    if (error.response.status && error.response.status === 401) {
      store.dispatch(actions.auth.logout());
    }
    return Promise.reject(error.response.data);
  }
);
