import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api",
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401 && error.response.data.message === "Invalid refresh token" && !error.config._retry) {
        error.config._retry = true;
      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("/auth/refresh", { token: refreshToken });
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axios(error.config);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        // If token refresh fails, redirect to login
        window.location.href = "/auth";
      }
    }
    throw error;
  }
);

export default api;
