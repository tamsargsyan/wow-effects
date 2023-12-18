import * as actionTypes from "../types/aboutUsTypes";

const initialState = {
  about: null,
  loading: false,
  error: null,
};

const aboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ABOUT_US_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_ABOUT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        about: action.payload,
      };
    case actionTypes.FETCH_ABOUT_US_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default aboutUsReducer;
