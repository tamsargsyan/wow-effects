import apiService from "../../services/apiService";
import * as actionTypes from "../types/homeTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_HOME_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_HOME_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_HOME_ERROR,
  payload: error,
});

export const fetchHome = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
