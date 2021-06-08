import { popupConstants } from "../constants/actionTypes";
import React from "react";

export function openPopup(payload) {
  return {
    type: popupConstants.OPEN_POPUP,
    selectedComponent: payload,
  };
}

export function closePopup() {
  return {
    type: popupConstants.CLOSE_POPUP,
  };
}
