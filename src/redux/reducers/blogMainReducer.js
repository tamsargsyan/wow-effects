import * as actionTypes from "../types/blogMainTypes";

const initialState = {
  blogMain: null,
  loading: false,
  error: null,
};

const blogMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOG_MAIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_BLOG_MAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        blogMain: action.payload,
      };
    case actionTypes.FETCH_BLOG_MAIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogMainReducer;
