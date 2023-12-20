import apiService from "../../services/apiService";
import * as actionTypes from "../types/workTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_WORK_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_WORK_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_WORK_ERROR,
  payload: error,
});

export const fetchWork = id => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get(`work/${id}`)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
