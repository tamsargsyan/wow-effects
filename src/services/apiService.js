import axios from "axios";

// const BASE_URL = process.env.WOW_EFFECT_BASE_URL;
const BASE_URL = "https://prod.machtech.site/Armine/WowEffect/api";

const apiService = {
  get: async (endpoint, params = {}, headers = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        params: { ...params },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
