import * as actionTypes from "../types/blogTypes";

const initialState = {
  blog: null,
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOG_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blog: action.payload,
      };
    case actionTypes.FETCH_BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
