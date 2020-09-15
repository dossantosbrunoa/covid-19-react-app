import CovidService from "../../services/CovidService";
import * as actionTypes from "./actionTypes";

const covidService = new CovidService();

const getSummaryStarted = () => ({
  type: actionTypes.GET_SUMMARY_STARTED,
});

const getSummarySuccess = (summaryList, global) => ({
  type: actionTypes.GET_SUMMARY_SUCCESS,
  summaryList,
  global,
});

const getSummaryFailed = (errorMessage) => ({
  type: actionTypes.GET_SUMMARY_FAILED,
  errorMessage,
});

export const updateSummaryList = (summaryList) => ({
  type: actionTypes.UPDATE_SUMMARY_LIST,
  summaryList,
});

export const getSummary = () => {
  return (dispatch) => {
    dispatch(getSummaryStarted());
    covidService
      .getSummary()
      .then((data) => {
        dispatch(getSummarySuccess(data.summaryList, data.global));
      })
      .catch((errorMessage) => {
        dispatch(getSummaryFailed(errorMessage));
      });
  };
};

const getHistoryByCountryStarted = () => ({
  type: actionTypes.GET_HISTORY_BY_COUNTRY_STARTED,
});

const getHistoryByCountrySuccess = (countryHistoryObject) => ({
  type: actionTypes.GET_HISTORY_BY_COUNTRY_SUCCESS,
  countryHistoryObject,
});

const getHistoryByCountryFailed = (errorMessage) => ({
  type: actionTypes.GET_HISTORY_BY_COUNTRY_FAILED,
  errorMessage,
});

export const getHistoryByCountry = (iso2Code) => {
  return (dispatch) => {
    dispatch(getHistoryByCountryStarted());
    covidService
      .getHistoryByCountry(iso2Code)
      .then((data) => {
        dispatch(getHistoryByCountrySuccess(data));
      })
      .catch((errorMessage) => {
        dispatch(getHistoryByCountryFailed(errorMessage));
      });
  };
};