import {imaQuotationConstants} from '../constants/actionTypes';
import {imaQuotationService} from '../services';
import React from "react";

export const imaQuotationActions = {
  getQuotations,
  getQuotation,
};

function getQuotations(params) {
    return dispatch => {
        return imaQuotationService.getQuotations(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: imaQuotationConstants.GET_QUOTATIONS_SUCCESS, data } }
    function failure(error) { return { type: imaQuotationConstants.GET_QUOTATIONS_FAILURE, error } }
}

function getQuotation(params) {
    return dispatch => {
        return imaQuotationService.getQuotation(params.id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: imaQuotationConstants.GET_QUOTATION_SUCCESS, data } }
    function failure(error) { return { type: imaQuotationConstants.GET_QUOTATION_FAILURE, error } }
}
