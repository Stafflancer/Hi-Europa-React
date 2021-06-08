import { residentConstants } from '../constants/actionTypes';

const initialState = {
    gettingResidents: false,
    getResidentsSuccess: false,
    getResidentsFailure: false,

    gettingResident: false,
    getResidentSuccess: false,
    getResidentFailure: false,

    pagination: {},
    resident: {},
    residents: []
};

export function residentReducer(state = initialState, action) {
    switch (action.type) {
        case residentConstants.GET_RESIDENTS_SUCCESS:
            return {
                ...state,
                residents: action.data.data,
                pagination: action.data.pagination,
                gettingResidents: false,
                getResidentsSuccess: true,
                getResidentsFailure: false
            };
        case residentConstants.GET_RESIDENTS_FAILURE:
            return {
                ...state,
                residents: [],
                gettingResidents: false,
                getResidentsSuccess: false,
                getResidentsFailure: action.error
            };

        case residentConstants.GET_RESIDENT_SUCCESS:
            return {
                ...state,
                resident: action.data.data,
                gettingResident: false,
                getResidentSuccess: true,
                getResidentFailure: false
            };
        case residentConstants.GET_RESIDENT_FAILURE:
            return {
                ...state,
                resident: {},
                gettingResident: false,
                getResidentSuccess: false,
                getResidentFailure: action.error
            };
        default:
            return state;
    }
}
