// reviewsReducer.js

import * as actionTypes from "../types/reviewsTypes";

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };
    case actionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
