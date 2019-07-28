// MIDDLEWARE
import axios from "axios";
import store from "../store";
import { toggleTokenModal } from "../actions";

// Add a request interceptor
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async req => {
    const state = store.getState();
    const accessToken =
      state && state.generalReducer ? state.generalReducer.token : null;

    // if token is found add it to the header
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    return req;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // token expired
    if (error.response && error.response.status === 401) {
      store.dispatch(toggleTokenModal());
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
