import CovidService from '../../services/CovidService';
import * as actionTypes from './actionTypes';

const covidService = new CovidService();

const getSummaryStarted = () => ({
    type: actionTypes.GET_SUMMARY_STARTED
});

const getSummarySuccess = (summaryList, global) => ({
    type: actionTypes.GET_SUMMARY_SUCCESS,
    summaryList,
    global,
});

const getSummaryFailed = (errorMessage) => ({
    type: actionTypes.GET_SUMMARY_FAILED,
    errorMessage
});

export const updateSummaryList = (summaryList) => ({
    type: actionTypes.UPDATE_SUMMARY_LIST,
    summaryList,
})

export const getSummary = () => {
    return (dispatch) => {
        dispatch(getSummaryStarted());
        covidService.getSummary()
            .then((data) => {
                dispatch(getSummarySuccess(data.summaryList, data.global));
            })
            .catch((errorMessage) => {
                dispatch(getSummaryFailed(errorMessage));
            });
    }
}

const getHistoryByCountryStarted = () => ({
    type: actionTypes.GET_HISTORY_BY_COUNTRY_STARTED
});

const getHistoryByCountrySuccess = (countryHistoryList) => ({
    type: actionTypes.GET_HISTORY_BY_COUNTRY_SUCCESS,
    countryHistoryList,
});

const getHistoryByCountryFailed = (errorMessage) => ({
    type: actionTypes.GET_HISTORY_BY_COUNTRY_FAILED,
    errorMessage
});

export const getHistoryByCountry = (country) => {
    return (dispatch) => {
        dispatch(getHistoryByCountryStarted());
        covidService.getHistoryByCountry(country)
            .then((data) => {
                dispatch(getHistoryByCountrySuccess(data));
            })
            .catch((errorMessage) => {
                dispatch(getHistoryByCountryFailed(errorMessage));
            });
    }
}

const getCountryOptionsStarted = () => ({
    type: actionTypes.GET_COUNTRY_OPTIONS_STARTED
});

const getCountryOptionsSuccess = (countryOptionsList) => ({
    type: actionTypes.GET_COUNTRY_OPTIONS_SUCCESS,
    countryOptionsList,
});

const getCountryOptionsFailed = (errorMessage) => ({
    type: actionTypes.GET_COUNTRY_OPTIONS_FAILED,
    errorMessage
});

export const getCountryOptions = () => {
    return (dispatch) => {
        dispatch(getCountryOptionsStarted());
        covidService.getCountryOptions()
            .then((data) => {
                dispatch(getCountryOptionsSuccess(data));
            })
            .catch((errorMessage) => {
                dispatch(getCountryOptionsFailed(errorMessage));
            });
    }
}