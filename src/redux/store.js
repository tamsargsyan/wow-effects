import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/reducers/basketReducer";
import reviewsReducer from "../redux/reducers/reviewsReducer";
import partnersReducer from "../redux/reducers/partnersReducer";
import homeReducer from "../redux/reducers/homeReducer";
import faqReducer from "./reducers/faqReducer";
import locationsReducer from "./reducers/locationsReducer";
import aboutUsReducer from "./reducers/aboutUsReducer";
import portfolioReducer from "./reducers/portfolioReducer";
import authReducer from "./reducers/authReducer";
import contactsReducer from "./reducers/contactsReducer";
import blogMainReducer from "./reducers/blogMainReducer";
import shopReducer from "./reducers/shopReducer";
import blogReducer from "./reducers/blogReducer";
import postReducer from "./reducers/postReducer";
import workReducer from "./reducers/workReducer";
import productsHomeReducer from "./reducers/productsHomeReducer";

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
    auth: authReducer,
    contacts: contactsReducer,
    blogMain: blogMainReducer,
    shop: shopReducer,
    blog: blogReducer,
    post: postReducer,
    work: workReducer,
    productsHome: productsHomeReducer,
  },
});

export default store;
