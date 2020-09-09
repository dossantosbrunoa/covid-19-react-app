import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    summaryList: [],
    countryHistoryList: [],
    global: null,
    loading: false,
    errorMessage: '' 
}

const summaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.GET_SUMMARY_STARTED:
            return {
                ...state,
                loading: true,
                errorMessage: ''
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
                errorMessage: action.errorMessage
            }
        case actionsTypes.GET_HISTORY_BY_COUNTRY_STARTED:
            return {
                ...state,
                loading: true,
                errorMessage: ''
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
                errorMessage: action.errorMessage
            }
        case actionsTypes.UPDATE_SUMMARY_LIST:
            return {
                ...state,
                summaryList: action.summaryList
            }
        default:
            return state
    }
}

export default summaryReducer;