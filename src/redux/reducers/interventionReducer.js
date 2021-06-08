import { interventionConstants } from '../constants/actionTypes';

const initialState = {
    gettingInterventions: false,
    getInterventionsSuccess: false,
    getInterventionsFailure: false,
    pagination: {},
    interventions: [],
    intervention: {}
};

export function interventionReducer(state = initialState, action) {
    switch (action.type) {
        case interventionConstants.GET_INTERVENTIONS_SUCCESS:
            return {
                ...state,
                interventions: action.data.data,
                pagination: action.data.pagination,
                gettingInterventions: false,
                getInterventionsSuccess: true,
                getInterventionsFailure: false
            };
        case interventionConstants.GET_INTERVENTIONS_FAILURE:
            return {
                ...state,
                interventions: [],
                gettingInterventions: false,
                getInterventionsSuccess: false,
                getInterventionsFailure: action.error
            };
        case interventionConstants.GET_INTERVENTION_SUCCESS:
            return {
                ...state,
                intervention: action.data.data,
                gettingInterventions: false,
                getInterventionsSuccess: true,
                getInterventionsFailure: false
            };
        case interventionConstants.GET_INTERVENTION_FAILURE:
            return {
                ...state,
                intervention: {},
                gettingInterventions: false,
                getInterventionsSuccess: false,
                getInterventionsFailure: action.error
            };

        default:
            return state;
    }
}
