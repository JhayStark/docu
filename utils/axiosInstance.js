import axios from 'axios';
const api = axios.create();

api.interceptors.request.use(
  async config => {
    config.baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
    const userJson = await localStorage.getItem('user');
    const user = JSON.parse(userJson);
    const accessToken = user.access;
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
