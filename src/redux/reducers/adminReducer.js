import { adminConstants } from '../constants/actionTypes';

const initialState = {
    gettingUser: false,
    getUserSuccess: false,
    user: {},
    pagination: {},
    admins: [],
    getUserFailure: false,
    updatingUser: false,
    updateUserSuccess: false,
    updateUserFailure: false
};

export function adminReducer(state = initialState, action) {
    switch (action.type) {
        case adminConstants.GET_ADMINS_SUCCESS:
            return {
                ...state,
                admins: action.data.data,
                pagination: action.data.pagination,
                gettingUser: true,
                getUserSuccess: false,
                getUserFailure: false,
            };
        case adminConstants.GET_ADMINS_FAILURE:
            return {
                ...state,
                gettingUser: true,
                getUserSuccess: false,
                admins: [],
                pagination: {},
                getUserFailure: false,
            };
        case adminConstants.GET_ADMIN_REQUEST:
            return {
                ...state,
                gettingUser: true,
                getUserSuccess: false,
                user: {},
                getUserFailure: false,
            };
        case adminConstants.GET_ADMIN_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                getUserSuccess: true,
                user: action.data,
                getUserFailure: false
            };
        case adminConstants.GET_ADMIN_FAILURE:
            return {
                ...state,
                gettingUser: false,
                getUserSuccess: false,
                user: {},
                getUserFailure: action.error
            };
        case adminConstants.UPDATE_ADMIN_REQUEST:
            return {
                ...state,
                updatingUser: true,
                updateUserSuccess: false,
                updateUserFailure: false,
            };
        case adminConstants.UPDATE_ADMIN_SUCCESS:
            return {
                ...state,
                updatingUser: false,
                updateUserSuccess: true,
                updateUserFailure: false,
                user: action.data,
            };
        case adminConstants.UPDATE_ADMIN_FAILURE:
            return {
                ...state,
                updatingUser: false,
                updateUserSuccess: false,
                updateUserFailure: action.error,
            };
        default:
            return state;
    }
}
