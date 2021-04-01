import {resiliationConstants} from '../constants/actionTypes';
import {resiliationService} from '../services';
import React from "react";
import {resiliationReducer} from "../reducers/resiliationReducer";

export const resiliationActions = {
  getRsiliations,
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

    function success(data) { return { type: resiliationConstants.GET_RESILATION_SUCCESS, data } }
    function failure(error) { return { type: resiliationConstants.GET_RESILATION_FAILURE, error } }
}
