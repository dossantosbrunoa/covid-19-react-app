import CountriesService from "../../services/CountriesService";
import * as actionTypes from "../actions/actionTypes";

const countriesService = new CountriesService();

const getCountriesStarted = () => ({
  type: actionTypes.GET_COUNTRIES_STARTED,
});

const getCountriesSuccess = (countriesList) => ({
  type: actionTypes.GET_COUNTRIES_SUCCESS,
  countriesList: countriesList,
});

const getCountriesFailed = (errorMessage) => ({
  type: actionTypes.GET_COUNTRIES_FAILED,
  errorMessage: errorMessage,
});

export const getCountries = () => {
  return (dispatch) => {
    dispatch(getCountriesStarted());
    countriesService
      .get()
      .then((countriesList) => {
        dispatch(getCountriesSuccess(countriesList));
      })
      .catch((errorMessage) => {
        dispatch(getCountriesFailed(errorMessage));
      });
  };
};
