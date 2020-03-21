import axios from "axios";

// in a real project we have to store this in the .env file
const key = "2854a47a27d648f2a91108a2ba59e497";
// but for the purposes of this task I will leave it here

axios.defaults.baseURL = "https://newsapi.org/v2";

export default {
  async getHotNews() {
    try {
      const data = axios.get(`/top-headlines?country=us&apiKey=${key}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
