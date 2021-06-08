import {contractConstants} from '../constants/actionTypes';
import {contractService} from '../services';
import React from "react";

export const contractActions = {
  getContract,
  getContracts,
};

function getContracts(params) {
    return dispatch => {
        return contractService.getContracts(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: contractConstants.GET_CONTRACTS_SUCCESS, data } }
    function failure(error) { return { type: contractConstants.GET_CONTRACTS_FAILURE, error } }
}

function getContract(params) {
    return dispatch => {
        return contractService.getContract(params.id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: contractConstants.GET_CONTRACT_SUCCESS, data } }
    function failure(error) { return { type: contractConstants.GET_CONTRACT_FAILURE, error } }
}
