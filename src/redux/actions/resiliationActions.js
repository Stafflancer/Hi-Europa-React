import {resiliationConstants} from '../constants/actionTypes';
import {resiliationService} from '../services';
import React from "react";
import {resiliationReducer} from "../reducers/resiliationReducer";

export const resiliationActions = {
  getRsiliations,
  getRsiliation,
};

function getRsiliations(params) {
    return dispatch => {
        return resiliationService.getResiliations(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: resiliationConstants.GET_RESILATIONS_SUCCESS, data } }
    function failure(error) { return { type: resiliationConstants.GET_RESILATIONS_FAILURE, error } }
}

function getRsiliation(id) {
    return dispatch => {
        return resiliationService.getResiliation(id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: resiliationConstants.GET_RESILATION_SUCCESS, data } }
    function failure(error) { return { type: resiliationConstants.GET_RESILATION_FAILURE, error } }
}
