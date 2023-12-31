import * as actionTypes from "../types/portfolioTypes";

const initialState = {
  portfolio: null,
  loading: false,
  error: null,
  workCategories: null,
  workCategoriesLoading: false,
  workCategoriesError: null,
  workTypes: null,
  workTypesLoading: false,
  workTypesError: null,
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PORTFOLIO_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolio: action.payload,
      };
    case actionTypes.FETCH_PORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // work categories

    case actionTypes.FETCH_WORK_CATEGORIES_LOADING:
      return {
        ...state,
        workCategoriesLoading: true,
        workCategoriesError: null,
      };
    case actionTypes.FETCH_WORK_CATEGORIES_SUCCESS:
      return {
        ...state,
        workCategoriesLoading: false,
        workCategories: action.payload,
      };
    case actionTypes.FETCH_WORK_CATEGORIES_ERROR:
      return {
        ...state,
        workCategoriesLoading: false,
        workCategoriesError: action.payload,
      };

    //work types

    case actionTypes.FETCH_WORK_TYPES_LOADING:
      return {
        ...state,
        workTypesLoading: true,
        workTypesError: null,
      };
    case actionTypes.FETCH_WORK_TYPES_SUCCESS:
      return {
        ...state,
        workTypesLoading: false,
        workTypes: action.payload,
      };
    case actionTypes.FETCH_WORK_TYPES_ERROR:
      return {
        ...state,
        workTypesLoading: false,
        workTypesError: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
