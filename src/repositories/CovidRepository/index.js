import axios from "axios";

export default class CovidRepository {
  async getSummary() {
    return axios.get("https://api.covid19api.com/summary");
  }

  async getHistoryByCountry(country) {
    return axios.get(`https://api.covid19api.com/dayone/country/${country}`);
  }

  async getCountryOptions() {
    return axios.get("https://api.covid19api.com/countries");
  }
}
