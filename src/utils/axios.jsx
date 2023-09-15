import axios from "axios";
import toast from "react-hot-toast";
const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer token";
    toast.success("Sending the request");
    return config;
  },
  (error) => {
    console.log(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    toast.success("Operation success");
    return response;
  },

  (error) => {
    console.log(error);
  }
);

export default axiosInstance;
