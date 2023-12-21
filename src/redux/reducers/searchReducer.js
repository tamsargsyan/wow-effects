import * as actionTypes from "../types/searchTypes";

const initialState = {
  wanted_products: null,
  loading: false,
  error: null,
};

const searchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        wanted_products: action.payload,
      };
    case actionTypes.FETCH_SEARCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchProductsReducer;
