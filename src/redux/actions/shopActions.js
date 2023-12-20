import apiService from "../../services/apiService";
import * as actionTypes from "../types/shopTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_SHOP_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_SHOP_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_SHOP_ERROR,
  payload: error,
});

export const fetchShop = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("shop")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
