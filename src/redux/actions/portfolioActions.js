import apiService from "../../services/apiService";
import * as actionTypes from "../types/portfolioTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_PORTFOLIO_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_PORTFOLIO_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_PORTFOLIO_ERROR,
  payload: error,
});

export const fetchPortfolio = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("portfolio")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};

export const fetchWorkCategoriesStart = () => ({
  type: actionTypes.FETCH_WORK_CATEGORIES_LOADING,
});

export const fetchWorkCategoriesSuccess = data => ({
  type: actionTypes.FETCH_WORK_CATEGORIES_SUCCESS,
  payload: data,
});

export const fetchWorkCategoriesFailure = error => ({
  type: actionTypes.FETCH_WORK_CATEGORIES_ERROR,
  payload: error,
});

export const fetchWorkCategories = () => {
  return dispatch => {
    dispatch(fetchWorkCategoriesStart());
    apiService
      .get("workCategories")
      .then(data => {
        dispatch(fetchWorkCategoriesSuccess(data));
      })
      .catch(error => {
        dispatch(fetchWorkCategoriesFailure(error));
      });
  };
};
