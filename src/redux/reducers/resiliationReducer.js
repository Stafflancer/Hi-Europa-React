import { resiliationConstants } from '../constants/actionTypes';

const initialState = {
    gettingResiliations: false,
    getResiliationsSuccess: false,
    getResiliationsFailure: false,
    pagination: {},
    resiliations: []
};

export function resiliationReducer(state = initialState, action) {
    switch (action.type) {
        case resiliationConstants.GET_RESILATION_SUCCESS:
            return {
                ...state,
                resiliations: action.data.data,
                pagination: action.data.pagination,
                gettingResiliations: false,
                getResiliationsSuccess: true,
                getResiliationsFailure: false
            };
        case resiliationConstants.GET_RESILATION_FAILURE:
            return {
                ...state,
                resiliations: [],
                gettingResiliations: false,
                getResiliationsSuccess: false,
                getResiliationsFailure: action.error
            };
        default:
            return state;
    }
}
