// reviewsActions.js
import apiService from "../../services/apiService";
import * as actionTypes from "../types/reviewsTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_DATA_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get(
        "reviews",
        {},
        {
          "Content-Type": "application/json",
        }
      )
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
