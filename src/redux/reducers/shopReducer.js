import * as actionTypes from "../types/shopTypes";

const initialState = {
  shop: null,
  loading: false,
  error: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOP_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload,
      };
    case actionTypes.FETCH_SHOP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
