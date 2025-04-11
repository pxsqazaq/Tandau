import { defineNuxtPlugin, useRuntimeConfig, useCookie } from "#app";
import axios, { type AxiosInstance } from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const API_URL =
    (config.public.apiBase as string) || "http://localhost:8000/api/v1";

  const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = useCookie("aimanAccessToken").value;
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        useCookie("aimanAccessToken").value = null;
      }
      return Promise.reject(error);
    },
  );

  return {
    provide: {
      http: api,
    },
  };
});
