import { userConstants } from '../constants/actionTypes';

const initialState = {
    gettingUser: false,
    getUserSuccess: false,
    getUserFailure: false,
    user: {},
    pagination: {},
    users: []
};
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.data.data,
                pagination: action.data.pagination,
                gettingUser: false,
                getUserSuccess: true,
                getUserFailure: false
            };
        case userConstants.GET_USERS_FAILURE:
            return {
                ...state,
                users: [],
                gettingUser: false,
                getUserSuccess: false,
                getUserFailure: action.error
            };
        case userConstants.DELETE_USERS_SUCCESS:
            let users = state.users.filter(item => item.id !== Number(action.params.id))
                return {
                ...state,
                    users: users,
                    gettingUser: false,
                    getUserSuccess: true,
                    getUserFailure: false,
                };
        case userConstants.EDIT_USERS_SUCCESS:
            return {
                ...state,
                    user: action.data.data,
                };
        case userConstants.UPDATE_USERS_SUCCESS:
            return state;
        case userConstants.UPDATE_USERS_FAILURE:
            let failureUpdate = Object.values(action.errors)
            return {
                ...state,
                getUserFailure: failureUpdate[0][0]
            };
        case userConstants.CREATE_USERS_SUCCESS:
            return state;
        case userConstants.CREATE_USERS_FAILURE:
            let failureCreate = Object.values(action.errors)
            return {
                ...state,
                getUserFailure: failureCreate[0][0]
            };
        default:
            return state;
    }
}
