import apiService from "../../services/apiService";
import * as actionTypes from "../types/blogTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_BLOG_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_BLOG_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_BLOG_ERROR,
  payload: error,
});

export const fetchBlog = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("blog")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
