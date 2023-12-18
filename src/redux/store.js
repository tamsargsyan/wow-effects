import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/reducers/basketReducer";
import reviewsReducer from "../redux/reducers/reviewsReducer";
import partnersReducer from "../redux/reducers/partnersReducer";
import homeReducer from "../redux/reducers/homeReducer";
import faqReducer from "./reducers/faqReducer";
import locationsReducer from "./reducers/locationsReducer";
import aboutUsReducer from "./reducers/aboutUsReducer";
import portfolioReducer from "./reducers/portfolioReducer";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    reviews: reviewsReducer,
    partners: partnersReducer,
    home: homeReducer,
    faq: faqReducer,
    locations: locationsReducer,
    about: aboutUsReducer,
    portfolio: portfolioReducer,
  },
});

export default store;
