import {authConstants} from '../constants/actionTypes';
import {authService} from '../services';

export const authActions = {
  login,
  logout,
};

function login(data) {

  return dispatch => {
    dispatch(request());
    authService.login(data)
      .then(response => {
        dispatch(success(response.data.user));
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        window.location.href = '/admin/dashboard'
      })
      .catch(function (error) {
        dispatch(failure(error.response.data));
      })
  };

  function request() { return { type: authConstants.LOGIN_REQUEST } }
  function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {

  return dispatch => {
    authService.logout()
      .then(response => {
        dispatch(logout());
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        window.location.href = '/admin/login'
      })
  };

  function logout() {return {type: authConstants.LOGOUT}}
}
