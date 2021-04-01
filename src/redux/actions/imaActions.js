import {imaConstants} from '../constants/actionTypes';
import {imaService} from '../services';
import React from "react";

export const imaActions = {
  getIma
};

function getIma(params) {
  return dispatch => {
    return imaService.getIma(params)
      .then(response => {
        dispatch(success(response.data))
        return response.data
      })
      .catch(error => {
        dispatch(failure(error.response.data));
      })
  };

  function success(data) { return { type: imaConstants.GET_IMA_SERVICES_SUCCESS, data } }
  function failure(error) { return { type: imaConstants.GET_IMA_SERVICES_FAILURE, error } }
}
