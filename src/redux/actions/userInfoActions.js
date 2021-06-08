import { userInfoConstants } from "../constants/actionTypes";
import React from "react";

export const userInfoActions = {
    updateUserInfo,
};

function updateUserInfo(payload) {
  return {
    type: userInfoConstants.UPDATE_USER_INFO,
    payload
  };
}
