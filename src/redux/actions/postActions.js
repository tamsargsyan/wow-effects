// reviewsActions.js
import apiService from "../../services/apiService";
import * as actionTypes from "../types/postTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_POST_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_POST_ERROR,
  payload: error,
});

export const fetchPost = id => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get(`post/${id}`)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
