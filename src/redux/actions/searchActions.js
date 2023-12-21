import apiService from "../../services/apiService";
import * as actionTypes from "../types/searchTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_SEARCH_PRODUCT_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_SEARCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_SEARCH_PRODUCT_ERROR,
  payload: error,
});

export const fetchWantedProducts = query => {
  console.log(query);
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get(`product/search/${query}`)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
