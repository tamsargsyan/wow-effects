import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import reviewsReducer from "./reviewsReducer";
import partnersReducer from "./partnersReducer";
import aboutUsReducer from "./aboutUsReducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  reviews: reviewsReducer,
  partners: partnersReducer,
  about: aboutUsReducer,
});

export default rootReducer;
