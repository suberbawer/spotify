import axios from "axios";

// Add a request interceptor
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async req => {
    const accessToken =
      "BQClV9rm4AhNELxxtTkku9xYzstH9ks2zhqAw12-i7rY89saXEF9SZ2Ur0jXT9SfVIgYmLt5P7Fdi5p6aCs"; // ned to ask in home page

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
