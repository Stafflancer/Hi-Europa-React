import {prospectConstants} from '../constants/actionTypes';
import {prospectService} from '../services';
import React from "react";

export const prospectActions = {
  getProspects,
  getProspect,
};

function getProspects(params) {
  return dispatch => {
        return prospectService.getProspects(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: prospectConstants.GET_PROSPECTS_SUCCESS, data } }
    function failure(error) { return { type: prospectConstants.GET_PROSPECTS_FAILURE, error } }
}

function getProspect(id) {
    return dispatch => {
        return prospectService.getProspect(id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: prospectConstants.GET_PROSPECT_SUCCESS, data } }
    function failure(error) { return { type: prospectConstants.GET_PROSPECT_FAILURE, error } }
}
