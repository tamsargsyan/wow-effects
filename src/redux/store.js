import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/reducers/basketReducer";
import reviewsReducer from "../redux/reducers/reviewsReducer";
import partnersReducer from "../redux/reducers/partnersReducer";
import homeReducer from "../redux/reducers/homeReducer";
import faqReducer from "./reducers/faqReducer";
import locationsReducer from "./reducers/locationsReducer";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    reviews: reviewsReducer,
    partners: partnersReducer,
    home: homeReducer,
    faq: faqReducer,
    locations: locationsReducer,
  },
});

export default store;
