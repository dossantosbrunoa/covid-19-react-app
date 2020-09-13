import CovidRepository from '../../repositories/CovidRepository';
import CountryService from '../CountriesService';

import { sortByProperty } from '../../util/listUtil';
import moment from 'moment';

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
                if(country) {
                    return {
                        alpha2Code: cd.CountryCode,
                        totalDeaths: cd.TotalDeaths,
                        totalCases: cd.TotalConfirmed,
                        totalRecovered: cd.TotalRecovered,
                        population: country.population,
                        name: country.translations.br,
                        flag: country.flag
                    }
                }
            }).filter((e) => !!e);
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
            const { data } = await this.covidRepository.getHistoryByCountry(country);
            const countryResult = data.map(country => {
                return {
                    ...country,
                    Date: moment(country.Date).format('DD/MM/YYYY'),
                    cases: country.Confirmed,
                    deaths: country.Deaths,
                    recovered: country.Recovered,
                }
            });
            return Promise.resolve(countryResult);
        } catch {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }

    async getCountryOptions() {
        try {
            const { data } = await this.covidRepository.getCountryOptions();
            const countries = await this.countryService.get();
            const countryOptionsList = data.map(cd => {
                const country = countries.find(c => c.alpha2Code === cd.ISO2);
                if(country) {
                    return  {
                        slug: cd.Slug,
                        name: country.translations.br,
                    };
                }
            }).filter((e) => !!e);
            return Promise.resolve(sortByProperty(countryOptionsList, 'name', 'asc'));
        } catch (error) {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }
}