import * as actionTypes from "../types/partnersType";

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARTNERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PARTNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };
    case actionTypes.FETCH_PARTNERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default partnersReducer;
