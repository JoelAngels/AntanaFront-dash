import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const headers = {
  contentType: "application/json",
};

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
