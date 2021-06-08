import { popupConstants } from "../constants/actionTypes";

const initialState = {
  showPopup: false,
  selectedComponent: '',
};
export function popupReducer(state = initialState, action) {
  switch (action.type) {
    case popupConstants.OPEN_POPUP:
      return {
        ...state,
        showPopup: true,
        selectedComponent: action.selectedComponent,
      };
    case popupConstants.CLOSE_POPUP:
      return {
        ...state,
        showPopup: false,
      };
    default:
      return state;
  }
}
