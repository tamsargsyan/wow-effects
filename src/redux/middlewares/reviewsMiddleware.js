import * as actionTypes from "../types/reviewsTypes";
import apiService from "../../services/apiService";

const reviewsMiddleware = () => next => async action => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LOADING:
      try {
        const data = await apiService.get("reviews");
        next({ type: actionTypes.FETCH_DATA_SUCCESS, payload: data });
      } catch (error) {
        next({ type: actionTypes.FETCH_DATA_ERROR, payload: error.message });
      }
      break;
    default:
      return next(action);
  }
};

export default reviewsMiddleware;
