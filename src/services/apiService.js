import axios from "axios";

// const BASE_URL = process.env.WOW_EFFECT_BASE_URL;
const BASE_URL = "https://prod.machtech.site/Armine/WowEffect/api";
export const STORAGE_URL = "https://prod.machtech.site/Armine/WowEffect";

const apiService = {
  get: async (endpoint, params = {}, headers = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (endpoint, data = {}, headers = {}, setStateCallback) => {
    try {
      setStateCallback({ loading: true, error: null, data: null });

      const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          ...headers,
        },
      });

      setStateCallback({ loading: false, error: null, data: response.data });
    } catch (error) {
      setStateCallback({ loading: false, error, data: null });
    }
  },
};

export default apiService;
