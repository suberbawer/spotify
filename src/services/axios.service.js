import axios from "axios";

// Add a request interceptor
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async req => {
    const accessToken =
      "BQB7paxdHQayrVXYb3s7QI41NGAKvsNiI9L2ogRRmZViaFL50aK6G3v4kP75nCXgmlT-EpamLX2sYHvD_5A"; // ned to ask in home page

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
