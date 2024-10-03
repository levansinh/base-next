import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ENV_APP } from "./env.config";

class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = "";
    this.instance = axios.create({
      timeout: 10000,
      baseURL: ENV_APP.BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.request.use(
      (config) => {
        if (config.headers) {
          config.headers.Authorization = "Bearer" + this.accessToken;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
