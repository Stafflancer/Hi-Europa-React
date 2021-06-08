import { headerConstants } from "../constants/actionTypes";

const initialState = {
  headerType: "H5",
};
export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case headerConstants.UPDATE_HEADER:
      return {
        ...state,
        headerType: action.payload,
      };
    case headerConstants.ACTIVE_MENU:
      return {
        ...state,
        active: action.payload
      }
    default:
      return state;
  }
}
