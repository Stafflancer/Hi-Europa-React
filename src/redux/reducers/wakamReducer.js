import { wakamConstants } from '../constants/actionTypes';

const initialState = {
  gettingWakamService: false,
  getWakamServiceSuccess: false,
  getWakamServiceFailure: false,
  wakamService: {},
  pagination: {},
  wakamServiceData: []
};
export function wakamReducer(state = initialState, action) {
  switch (action.type) {
    case wakamConstants.GET_WAKAM_SERVICES_SUCCESS:
      return {
        ...state,
        wakamServiceData: action.data.data,
        pagination: action.data.pagination,
        gettingWakamService: false,
        getWakamServiceSuccess: true,
        getWakamServiceFailure: false
      };
    case wakamConstants.GET_WAKAM_SERVICES_FAILURE:
      return {
        ...state,
        wakamServiceData: [],
        gettingWakamService: false,
        getWakamServiceSuccess: false,
        getWakamServiceFailure: action.error
      };
    default:
      return state;
  }
}
