import { imaUserConstants } from "../constants/actionTypes";

const initialState = {
  gettingUser: false,
  getUserSuccess: false,
  getUserFailure: false,
  user: {},
  pagination: {},
  users: [],
};
export function imaUserReducer(state = initialState, action) {
  switch (action.type) {
    case imaUserConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data.data,
        pagination: action.data.pagination,
        gettingUser: false,
        getUserSuccess: true,
        getUserFailure: false,
      };
    case imaUserConstants.GET_USERS_FAILURE:
      return {
        ...state,
        users: [],
        gettingUser: false,
        getUserSuccess: false,
        getUserFailure: action.error,
      };
    case imaUserConstants.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data.data,
        // pagination: action.data.pagination,
        gettingUser: false,
        getUserSuccess: true,
        getUserFailure: false,
      };
    case imaUserConstants.GET_USER_FAILURE:
      return {
        ...state,
        user: {},
        gettingUser: false,
        getUserSuccess: false,
        getUserFailure: action.error,
      };
    default:
      return state;
  }
}
