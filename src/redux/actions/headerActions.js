import { headerConstants } from "../constants/actionTypes";

export const updateHeaderAction = {
  updateHeader,
  setActiveMenu
};

function updateHeader(payload) {
  return {
    type: headerConstants.UPDATE_HEADER,
    payload,
  };
};

function setActiveMenu(payload) {
  return {
    type: headerConstants.ACTIVE_MENU,
    payload
  };
}
