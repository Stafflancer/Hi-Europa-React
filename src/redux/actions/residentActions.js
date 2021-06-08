import {residentConstants} from '../constants/actionTypes';
import {residentService} from '../services';
import React from "react";

export const residentActions = {
  getResidents,
  getResident,
};

function getResidents(params) {
  return dispatch => {
        return residentService.getResidents(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: residentConstants.GET_RESIDENTS_SUCCESS, data } }
    function failure(error) { return { type: residentConstants.GET_RESIDENTS_FAILURE, error } }
}

function getResident(id) {
    return dispatch => {
        return residentService.getResident(id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: residentConstants.GET_RESIDENT_SUCCESS, data } }
    function failure(error) { return { type: residentConstants.GET_RESIDENT_FAILURE, error } }
}
