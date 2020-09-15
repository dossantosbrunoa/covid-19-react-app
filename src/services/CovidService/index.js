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
            const { data } = await this.covidRepository.getCountries();
            const countries = await this.countryService.get();
            const summaryList = data.map(cd => {
                const country = countries.find(c => c.alpha2Code === cd.countryInfo.iso2);
                if(country) {
                    return {
                        alpha2Code: cd.countryInfo.iso2,
                        totalDeaths: cd.deaths,
                        totalCases: cd.cases,
                        totalRecovered: cd.recovered,
                        population: country.population,
                        name: country.translations.br,
                        flag: country.flag
                    }
                }
            }).filter((e) => !!e);
            const { data: global } = await this.covidRepository.getGlobal();
            return Promise.resolve({
                summaryList: sortByProperty(summaryList, 'totalCases', 'desc'),
                global: {
                    totalDeaths: global.deaths,
                    totalCases: global.cases,
                    totalRecovered: global.recovered,
                }
            });
        } catch {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }

    async getHistoryByCountry(iso2code) {
        try {
            const { data } = await this.covidRepository.getHistoryByCountry(iso2code);
            return Promise.resolve({
                cases: data.timeline.cases,
                deaths: data.timeline.deaths,
                recovered: data.timeline.recovered,
            });
        } catch {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }
}