import {wakamConstants} from '../constants/actionTypes';
import {wakamService} from '../services';
import React from "react";

export const wakamActions = {
  getWakam
};

function getWakam(params) {
  return dispatch => {
    return wakamService.getWakam(params)
      .then(response => {
        dispatch(success(response.data))
        return response.data
      })
      .catch(error => {
        dispatch(failure(error.response.data));
      })
  };

  function success(data) { return { type: wakamConstants.GET_WAKAM_SERVICES_SUCCESS, data } }
  function failure(error) { return { type: wakamConstants.GET_WAKAM_SERVICES_FAILURE, error } }
}
