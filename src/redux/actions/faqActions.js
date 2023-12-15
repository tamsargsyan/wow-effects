import apiService from "../../services/apiService";
import * as actionTypes from "../types/faqTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_FAQ_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_FAQ_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_FAQ_ERROR,
  payload: error,
});

export const fetchFAQ = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("faq")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
