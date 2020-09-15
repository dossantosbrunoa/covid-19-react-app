import axios from "axios";

export default class CovidRepository {
  async getCountries() {
    return axios.get("https://corona.lmao.ninja/v2/countries");
  }

  async getGlobal() {
    return axios.get("https://corona.lmao.ninja/v2/all");
  }

  async getHistoryByCountry(iso2Code) {
    return axios.get(`https://corona.lmao.ninja/v2/historical/${iso2Code}?lastdays=all`);
  }
}
