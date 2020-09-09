import CountriesRepository from '../../repositories/CountriesRepository';

export default class CountriesService {
    constructor() {
        this.countriesRepository =  new CountriesRepository();
    }

    async get() {
        try {
            const { data } = await this.countriesRepository.get();
            return Promise.resolve(data);
        } catch(error) {
            return Promise.reject('Erro ao obter dados, tente novamente mais tarde');
        }
    }
}