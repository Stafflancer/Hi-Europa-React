import { resiliationConstants } from '../constants/actionTypes';

const initialState = {
    gettingResiliations: false,
    getResiliationsSuccess: false,
    getResiliationsFailure: false,

    gettingResiliation: false,
    getResiliationSuccess: false,
    getResiliationFailure: false,
    pagination: {},
    resiliation: {},
    resiliations: []
};

export function resiliationReducer(state = initialState, action) {
    switch (action.type) {
        case resiliationConstants.GET_RESILATIONS_SUCCESS:
            return {
                ...state,
                resiliations: action.data.data,
                pagination: action.data.pagination,
                gettingResiliations: false,
                getResiliationsSuccess: true,
                getResiliationsFailure: false
            };
        case resiliationConstants.GET_RESILATIONS_FAILURE:
            return {
                ...state,
                resiliations: [],
                gettingResiliations: false,
                getResiliationsSuccess: false,
                getResiliationsFailure: action.error
            };

        case resiliationConstants.GET_RESILATION_SUCCESS:
            return {
                ...state,
                resiliation: action.data.data,
                gettingResiliation: false,
                getResiliationSuccess: true,
                getResiliationFailure: false
            };
        case resiliationConstants.GET_RESILATION_FAILURE:
            return {
                ...state,
                resiliation: {},
                gettingResiliation: false,
                getResiliationSuccess: false,
                getResiliationFailure: action.error
            };
        default:
            return state;
    }
}
