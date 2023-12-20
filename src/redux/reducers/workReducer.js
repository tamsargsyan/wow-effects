import * as actionTypes from "../types/workTypes";

const initialState = {
  work: null,
  loading: false,
  error: null,
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORK_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_WORK_SUCCESS:
      return {
        ...state,
        loading: false,
        work: action.payload,
      };
    case actionTypes.FETCH_WORK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workReducer;
