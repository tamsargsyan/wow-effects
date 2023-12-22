import * as actionTypes from "../types/locationsTypes";

const initialState = {
  locations: null,
  loading: false,
  error: null,
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOCATIONS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload,
      };
    case actionTypes.FETCH_LOCATIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationsReducer;
