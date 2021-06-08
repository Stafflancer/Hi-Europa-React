import { prospectConstants } from '../constants/actionTypes';

const initialState = {
    gettingProspects: false,
    getProspectsSuccess: false,
    getProspectsFailure: false,

    gettingProspect: false,
    getProspectSuccess: false,
    getProspectFailure: false,

    pagination: {},
    prospect: {},
    prospects: []
};

export function prospectReducer(state = initialState, action) {
    switch (action.type) {
        case prospectConstants.GET_PROSPECTS_SUCCESS:
            return {
                ...state,
                prospects: action.data.data,
                pagination: action.data.pagination,
                gettingResidents: false,
                getResidentsSuccess: true,
                getResidentsFailure: false
            };
        case prospectConstants.GET_PROSPECTS_FAILURE:
            return {
                ...state,
                prospects: [],
                gettingResidents: false,
                getResidentsSuccess: false,
                getResidentsFailure: action.error
            };

        case prospectConstants.GET_PROSPECT_SUCCESS:
            return {
                ...state,
                prospect: action.data.data,
                gettingProspect: false,
                getProspectSuccess: true,
                getProspectFailure: false
            };
        case prospectConstants.GET_PROSPECT_FAILURE:
            return {
                ...state,
                prospect: {},
                gettingProspect: false,
                getProspectSuccess: false,
                getProspectFailure: action.error
            };
        default:
            return state;
    }
}
