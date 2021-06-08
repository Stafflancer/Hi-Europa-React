import {interventionConstants} from '../constants/actionTypes';
import {interventionService} from '../services';
import React from "react";

export const interventionActions = {
  getInterventions,
  getIntervention,
};

function getInterventions(params) {
    return dispatch => {
        return interventionService.getInterventions(params)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: interventionConstants.GET_INTERVENTIONS_SUCCESS, data } }
    function failure(error) { return { type: interventionConstants.GET_INTERVENTIONS_FAILURE, error } }
}

function getIntervention(params) {
    return dispatch => {
        return interventionService.getIntervention(params.id)
          .then(response => {
              dispatch(success(response.data))
              return response.data
          })
          .catch(error => {
              dispatch(failure(error.response.data));
          })
    };

    function success(data) { return { type: interventionConstants.GET_INTERVENTION_SUCCESS, data } }
    function failure(error) { return { type: interventionConstants.GET_INTERVENTION_FAILURE, error } }
}
