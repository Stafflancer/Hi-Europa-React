import {adminConstants} from '../constants/actionTypes';
import {adminService} from '../services';
import React from "react";

export const adminActions = {
    getAuthUser,
    getUser,
    updateUser,
    createUser,
    getUsers,
    deleteUser,
};

function getUsers() {

    return dispatch => {
        dispatch(request());
        return adminService.getUsers()
          .then(response => {
              return Promise.resolve(dispatch(success(response.data)));
          })
          .catch(function (error) {
              dispatch(failure(error.response.data));
          })
    };

    function request() { return { type: adminConstants.GET_ADMINS_REQUEST } }
    function success(data) { return { type: adminConstants.GET_ADMINS_SUCCESS, data } }
    function failure(error) { return { type: adminConstants.GET_ADMINS_FAILURE, error } }
}

function getAuthUser() {
    return dispatch => {
        dispatch(request());
        return adminService.get()
          .then(response => {
            return Promise.resolve(dispatch(success(response.data)));
          })
          .catch(function (error) {
              dispatch(failure(error.response.data));
          })
    };

    function request() { return { type: adminConstants.GET_ADMIN_REQUEST } }
    function success(data) { return { type: adminConstants.GET_ADMIN_SUCCESS, data } }
    function failure(error) { return { type: adminConstants.GET_ADMIN_FAILURE, error } }
}

function getUser(data) {
    return dispatch => {
        dispatch(request());
        return adminService.getUser(data.id)
          .then(response => {
            return Promise.resolve(dispatch(success(response.data)));
          })
          .catch(function (error) {
              dispatch(failure(error.response.data));
          })
    };

    function request() { return { type: adminConstants.GET_ADMIN_REQUEST } }
    function success(data) { return { type: adminConstants.GET_ADMIN_SUCCESS, data } }
    function failure(error) { return { type: adminConstants.GET_ADMIN_FAILURE, error } }
}

function updateUser(data) {
    return dispatch => {
        dispatch(request());
        return adminService.update(data)
          .then(response => {
            dispatch(success(response.data.data));
          })
          .catch(function (error) {
              dispatch(failure(error.response.data));
          })
    };

    function request() { return { type: adminConstants.UPDATE_ADMIN_REQUEST } }
    function success(data) { return { type: adminConstants.UPDATE_ADMIN_SUCCESS, data } }
    function failure(error) { return { type: adminConstants.UPDATE_ADMIN_FAILURE, error } }
}

function createUser(data) {
    return dispatch => {
        dispatch(request());
        return adminService.create(data)
          .then(response => {
            dispatch(success(response.data.data));
          })
          .catch(function (error) {
              dispatch(failure(error.response.data));
          })
    };

    function request() { return { type: adminConstants.UPDATE_ADMIN_REQUEST } }
    function success(data) { return { type: adminConstants.UPDATE_ADMIN_SUCCESS, data } }
    function failure(error) { return { type: adminConstants.UPDATE_ADMIN_FAILURE, error } }
}

function deleteUser(data) {
    return dispatch => {
        dispatch(request());
        return adminService.deleteUser(data.id)
          .then(response => {
            dispatch(success(response.data.data));
          })
          .catch(function (error) {
              dispatch(failure(error.response.data));
          })
    };

    function request() { return { type: adminConstants.UPDATE_ADMIN_REQUEST } }
    function success(data) { return { type: adminConstants.UPDATE_ADMIN_SUCCESS, data } }
    function failure(error) { return { type: adminConstants.UPDATE_ADMIN_FAILURE, error } }
}
