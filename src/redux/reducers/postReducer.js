import * as actionTypes from "../types/postTypes";

const initialState = {
  post: null,
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case actionTypes.FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
