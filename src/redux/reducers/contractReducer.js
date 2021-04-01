import { contractConstants } from '../constants/actionTypes';

const initialState = {
    gettingContracts: false,
    getContractsSuccess: false,
    getContractsFailure: false,
    pagination: {},
    contracts: []
};

export function contractReducer(state = initialState, action) {
    switch (action.type) {
        case contractConstants.GET_CONTRACTS_SUCCESS:
            return {
                ...state,
                contracts: action.data.data,
                pagination: action.data.pagination,
                gettingContracts: false,
                getContractsSuccess: true,
                getContractsFailure: false
            };
        case contractConstants.GET_CONTRACTS_FAILURE:
            return {
                ...state,
                contracts: [],
                gettingContracts: false,
                getContractsSuccess: false,
                getContractsFailure: action.error
            };
        default:
            return state;
    }
}
