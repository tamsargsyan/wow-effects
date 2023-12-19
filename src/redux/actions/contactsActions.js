import apiService from "../../services/apiService";
import * as actionTypes from "../types/contactsTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_CONTACTS_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_CONTACTS_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_CONTACTS_ERROR,
  payload: error,
});

export const fetchContacts = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("contacts")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
