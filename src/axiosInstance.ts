import axios from "axios";
import keycloak from "./keycloakSetup";

const axiosInstance = axios.create();

// Add an interceptor to refresh the token if needed and set the Authorization header
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!keycloak.token) {
      await keycloak.updateToken(30); // 5 is the minimum time in seconds before the token expires
    }
    config.headers.Authorization = `Bearer ${keycloak.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
