import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    countriesList: [],
    loading: false,
    errorMessage: '' 
}

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.GET_COUNTRIES_STARTED:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }
        case actionsTypes.GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                countriesList: action.countriesList
            }
        case actionsTypes.GET_COUNTRIES_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export default countriesReducer;