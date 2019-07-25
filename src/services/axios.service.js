import axios from "axios";

// Add a request interceptor
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async req => {
    const accessToken =
      "BQBhDBMQXqgsoUMqkuLQpmNm1EpMCYLv6Huq9zpjM0ejXe4V8UzRWUWFJWfS5mq8gsGu0RAMrk2Q7GMKTV4"; // ned to ask in home page

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
    return Promise.reject(error);
  }
);

export default axiosInstance;
