import * as actionTypes from "../types/authTypes";

export const login = () => ({
  type: actionTypes.LOGIN,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
