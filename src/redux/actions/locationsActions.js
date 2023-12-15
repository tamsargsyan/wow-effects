import apiService from "../../services/apiService";
import * as actionTypes from "../types/locationsTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_LOCATIONS_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_LOCATIONS_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_LOCATIONS_ERROR,
  payload: error,
});

export const fetchLocations = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("locations")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
