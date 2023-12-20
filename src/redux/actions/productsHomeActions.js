// reviewsActions.js
import apiService from "../../services/apiService";
import * as actionTypes from "../types/productsHomeTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_PRODUCTS_HOME_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_PRODUCTS_HOME_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_PRODUCTS_HOME_ERROR,
  payload: error,
});

export const fetchProductsHome = id => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get(`productsInHome`)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
