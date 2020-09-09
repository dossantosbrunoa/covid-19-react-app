import CovidRepository from '../../repositories/CovidRepository';
import CountryService from '../CountriesService';

import { sortByProperty } from '../../util/listUtil';

export default class CovidService {
    constructor() {
        this.covidRepository =  new CovidRepository();
        this.countryService = new CountryService();
    }

    async getSummary() {
        try {
            const { data } = await this.covidRepository.getSummary();
            const countries = await this.countryService.get();
            const summaryList = data.Countries.map(cd => {
                const country = countries.find(c => c.alpha2Code === cd.CountryCode);
                return {
                    alpha2Code: cd.CountryCode,
                    totalDeaths: cd.TotalDeaths,
                    totalCases: cd.TotalConfirmed,
                    totalRecovered: cd.TotalRecovered,
                    population: country.population,
                    name: country.translations.br,
                    flag: country.flag
                }
            });
            const global = data.Global;
            return Promise.resolve({
                summaryList: sortByProperty(summaryList, 'totalCases', 'desc'),
                global: global
            });
        } catch {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }

    async getHistoryByCountry(country) {
        try {
            const { data } = await this.covidRepository.getHistoryByCountry('brazil');
            return Promise.resolve(data);
        } catch {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }
}