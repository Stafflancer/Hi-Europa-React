import { imaConstants } from '../constants/actionTypes';

const initialState = {
  gettingImaService: false,
  getImaServiceSuccess: false,
  getImaServiceFailure: false,
  imaService: {},
  pagination: {},
  imaServiceData: []
};
export function imaReducer(state = initialState, action) {
  switch (action.type) {
    case imaConstants.GET_IMA_SERVICES_SUCCESS:
      return {
        ...state,
        imaServiceData: action.data.data,
        pagination: action.data.pagination,
        gettingImaService: false,
        getImaServiceSuccess: true,
        getImaServiceFailure: false
      };
    case imaConstants.GET_IMA_SERVICES_FAILURE:
      return {
        ...state,
        imaServiceData: [],
        gettingImaService: false,
        getImaServiceSuccess: false,
        getImaServiceFailure: action.error
      };
    default:
      return state;
  }
}
