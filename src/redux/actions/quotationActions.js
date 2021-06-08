import {quotationConstants} from '../constants/actionTypes';
import {quotationService} from '../services';
import React from "react";

export const quotationActions = {
  getQuotations,
  getQuotation,
};

function getQuotations(params) {
    return dispatch => {
        return quotationService.getQuotations(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: quotationConstants.GET_QUOTATIONS_SUCCESS, data } }
    function failure(error) { return { type: quotationConstants.GET_QUOTATIONS_FAILURE, error } }
}

function getQuotation(params) {
    return dispatch => {
        return quotationService.getQuotation(params.id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: quotationConstants.GET_QUOTATION_SUCCESS, data } }
    function failure(error) { return { type: quotationConstants.GET_QUOTATION_FAILURE, error } }
}
