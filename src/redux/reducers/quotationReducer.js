import { quotationConstants } from '../constants/actionTypes';

const initialState = {
    gettingQuotations: false,
    getQuotationsSuccess: false,
    getQuotationsFailure: false,
    pagination: {},
    quotations: []
};

export function quotationReducer(state = initialState, action) {
    switch (action.type) {
        case quotationConstants.GET_QUOTATIONS_SUCCESS:
            return {
                ...state,
                quotations: action.data.data,
                pagination: action.data.pagination,
                gettingQuotations: false,
                getQuotationsSuccess: true,
                getQuotationsFailure: false
            };
        case quotationConstants.GET_QUOTATIONS_FAILURE:
            return {
                ...state,
                quotations: [],
                gettingQuotations: false,
                getQuotationsSuccess: false,
                getQuotationsFailure: action.error
            };
        case quotationConstants.GET_QUOTATION_SUCCESS:
            return {
                ...state,
                quotations: action.data.data,
                pagination: action.data.pagination,
                gettingQuotations: false,
                getQuotationsSuccess: true,
                getQuotationsFailure: false
            };
        case quotationConstants.GET_QUOTATION_FAILURE:
            return {
                ...state,
                quotations: [],
                gettingQuotations: false,
                getQuotationsSuccess: false,
                getQuotationsFailure: action.error
            };
        default:
            return state;
    }
}
