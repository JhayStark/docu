import axios from "axios";
const api = axios.create();

api.interceptors.request.use(
  async (config) => {
    config.baseURL = `${process.env.BACKEND_URL}`;
    let accessToken = await localStorage.getItem("token");
    console.log(accessToken);

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken.replace(/['"]+/g, "")}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
