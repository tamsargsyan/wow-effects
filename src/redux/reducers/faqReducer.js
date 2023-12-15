import * as actionTypes from "../types/faqTypes";

const initialState = {
  faq: null,
  loading: false,
  error: null,
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FAQ_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        faq: action.payload,
      };
    case actionTypes.FETCH_FAQ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default faqReducer;
