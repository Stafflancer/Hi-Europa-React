import { imaQuotationConstants } from '../constants/actionTypes';

const initialState = {
    gettingQuotations: false,
    getQuotationsSuccess: false,
    getQuotationsFailure: false,

    gettingQuotation: false,
    getQuotationSuccess: false,
    getQuotationFailure: false,

    pagination: {},
    quotation: {},
    quotations: []
};

export function imaQuotationReducer(state = initialState, action) {
    switch (action.type) {
        case imaQuotationConstants.GET_QUOTATIONS_SUCCESS:
            return {
                ...state,
                quotations: action.data.data,
                pagination: action.data.pagination,
                gettingQuotations: false,
                getQuotationsSuccess: true,
                getQuotationsFailure: false
            };
        case imaQuotationConstants.GET_QUOTATIONS_FAILURE:
            return {
                ...state,
                quotations: [],
                gettingQuotations: false,
                getQuotationsSuccess: false,
                getQuotationsFailure: action.error
            };
        case imaQuotationConstants.GET_QUOTATION_SUCCESS:
            return {
                ...state,
                quotation: action.data.data,
                gettingQuotations: false,
                getQuotationsSuccess: true,
                getQuotationsFailure: false
            };
        case imaQuotationConstants.GET_QUOTATION_FAILURE:
            return {
                ...state,
                quotation: {},
                gettingQuotations: false,
                getQuotationsSuccess: false,
                getQuotationsFailure: action.error
            };
        default:
            return state;
    }
}
