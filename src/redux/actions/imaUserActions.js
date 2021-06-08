import {imaUserConstants} from '../constants/actionTypes';
import {imaUserService} from '../services';
import React from "react";

export const imaUserActions = {
    getUsers,
    getUser,
};

function getUsers(params) {
    return dispatch => {
        return imaUserService.getUsers(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: imaUserConstants.GET_USERS_SUCCESS, data } }
    function failure(error) { return { type: imaUserConstants.GET_USERS_FAILURE, error } }
}

function getUser(params) {
  return dispatch => {
    return imaUserService.getUser(params)
      .then(response => {
        dispatch(success(response.data))
        return response.data
      })
      .catch(error => {
        dispatch(failure(error.response.data));
      })
  };

  function success(data) { return { type: imaUserConstants.GET_USER_SUCCESS, data } }
  function failure(error) { return { type: imaUserConstants.GET_USER_FAILURE, error } }
}
