import axios from "axios";

export default class CountriesRepository {
  async get() {
    return axios.get("https://restcountries.eu/rest/v2/all");
  }
}
