import {adminConstants} from '../constants/actionTypes';
import {adminService} from '../services';
import React from "react";

export const adminActions = {
    getUser,
    updateUser,
};

function getUser() {
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
