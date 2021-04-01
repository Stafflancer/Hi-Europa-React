import {userConstants} from '../constants/actionTypes';
import {userService} from '../services';
import React from "react";

export const userActions = {
    getUsers,
    deleteUser,
    editUser,
    updateUser,
    createUser,
};

function getUsers(params) {
    return dispatch => {
        return userService.getUsers(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: userConstants.GET_USERS_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GET_USERS_FAILURE, error } }
}

function deleteUser(params) {
  return dispatch => {
    return userService.deleteUser(params)
      .then(() => {
        dispatch(success(params))
      })
  };

  function success(params) { return { type: userConstants.DELETE_USERS_SUCCESS, params } }
}

function editUser(params) {
  return dispatch => {
    return userService.editUser(params)
      .then(response => {
        dispatch(success(response.data))
        return response.data
      })
  };

  function success(data) { return { type: userConstants.EDIT_USERS_SUCCESS, data } }
}

function updateUser(params) {
  return dispatch => {
    return userService.updateUser(params)
      .then(response => {
        dispatch(success(response.data))
        return response.data
      })
      .catch(error => {
        dispatch(failure(error.response.data.errors));
      })
  };

  function success(data) { return { type: userConstants.UPDATE_USERS_SUCCESS, data } }
  function failure(errors) { return { type: userConstants.UPDATE_USERS_FAILURE, errors } }
}

function createUser(params) {
  return dispatch => {
    return userService.createUser(params)
      .then(response => {
        dispatch(success(response.data))
        return response.data
      })
      .catch(error => {
        dispatch(failure(error.response.data.errors));
      })
  };

  function success(data) { return { type: userConstants.CREATE_USERS_SUCCESS, data} }
  function failure(errors) { return { type: userConstants.CREATE_USERS_FAILURE, errors } }
}
