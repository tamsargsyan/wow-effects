import apiService from "../../services/apiService";
import * as actionTypes from "../types/blogMainTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_BLOG_MAIN_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_BLOG_MAIN_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_BLOG_MAIN_ERROR,
  payload: error,
});

export const fetchBlogMain = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("blogMain")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
