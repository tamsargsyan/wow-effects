import * as actionTypes from "../types/productsHomeTypes";

const initialState = {
  productsHome: null,
  loading: false,
  error: null,
};

const productsHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_HOME_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PRODUCTS_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        productsHome: action.payload,
      };
    case actionTypes.FETCH_PRODUCTS_HOME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsHomeReducer;
