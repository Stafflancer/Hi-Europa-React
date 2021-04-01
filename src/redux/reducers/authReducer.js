import { authConstants } from '../constants/actionTypes';

const initialState = {
    user: {},
    loggingIn: false,
    loggedIn: false,
    failure: false,
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                user: {},
                loggingIn: true,
                loggedIn: false,
                failure: false
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                loggingIn: false,
                loggedIn: true,
                failure: ''
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                user: {},
                loggingIn: false,
                loggedIn: false,
                failure: action.error.message
            };
        case authConstants.LOGOUT:
            return {
                ...state,
                user: {},
                loggingIn: false,
                loggedIn: false,
                failure: false
            };
        default:
            return state;
    }
}
