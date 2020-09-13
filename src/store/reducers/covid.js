import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    summaryList: [],
    countryHistoryList: [],
    countryOptionsList: [],
    global: null,
    loading: false,
    countryLoading: false,
    covidErrorMessage: null 
}

const summaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.GET_SUMMARY_STARTED:
            return {
                ...state,
                loading: true,
                covidErrorMessage: null
            }
        case actionsTypes.GET_SUMMARY_SUCCESS:
            return {
                ...state,
                loading: false,
                summaryList: action.summaryList,
                global: action.global,
            }
        case actionsTypes.GET_SUMMARY_FAILED:
            return {
                ...state,
                loading: false,
                covidErrorMessage: action.errorMessage
            }
        case actionsTypes.GET_HISTORY_BY_COUNTRY_STARTED:
            return {
                ...state,
                loading: true,
                covidErrorMessage: null
            }
        case actionsTypes.GET_HISTORY_BY_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                countryHistoryList: action.countryHistoryList,
            }
        case actionsTypes.GET_HISTORY_BY_COUNTRY_FAILED:
            return {
                ...state,
                loading: false,
                covidErrorMessage: action.errorMessage
            }
        case actionsTypes.UPDATE_SUMMARY_LIST:
            return {
                ...state,
                summaryList: action.summaryList
            }
        case actionsTypes.GET_COUNTRY_OPTIONS_STARTED:
            return {
                ...state,
                countryLoading: true,
                covidErrorMessage: null
            }
        case actionsTypes.GET_COUNTRY_OPTIONS_SUCCESS:
            return {
                ...state,
                countryLoading: false,
                countryOptionsList: action.countryOptionsList,
            }
        case actionsTypes.GET_COUNTRY_OPTIONS_FAILED:
            return {
                ...state,
                countryLoading: false,
                covidErrorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export default summaryReducer;