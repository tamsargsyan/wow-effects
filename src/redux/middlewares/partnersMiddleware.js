import * as actionTypes from "../types/partnersType";
import apiService from "../../services/apiService";

const partnersMiddleware = () => next => async action => {
  switch (action.type) {
    case actionTypes.FETCH_PARTNERS_LOADING:
      try {
        const data = await apiService.get("partners");
        next({ type: actionTypes.FETCH_PARTNERS_SUCCESS, payload: data });
      } catch (error) {
        next({
          type: actionTypes.FETCH_PARTNERS_ERROR,
          payload: error.message,
        });
      }
      break;
    default:
      return next(action);
  }
};

export default partnersMiddleware;
