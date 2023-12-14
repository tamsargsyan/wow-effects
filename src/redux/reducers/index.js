import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import reviewsReducer from "./reviewsReducer";
import partnersReducer from "./partnersReducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  reviews: reviewsReducer,
  partners: partnersReducer,
});

export default rootReducer;
