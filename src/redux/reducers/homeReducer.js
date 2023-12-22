import * as actionTypes from "../types/homeTypes";

const initialState = {
  home: null,
  loading: false,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        home: action.payload,
      };
    case actionTypes.FETCH_HOME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
