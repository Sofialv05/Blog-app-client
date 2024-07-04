import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gc.sofalvsy-web.site",
});

export default axiosInstance;
