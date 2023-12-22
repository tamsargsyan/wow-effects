import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";
import reviewsReducer from "./reviewsReducer";
import partnersReducer from "./partnersReducer";
import homeReducer from "./homeReducer";
import faqReducer from "./faqReducer";
import locationsReducer from "./locationsReducer";
import aboutUsReducer from "./aboutUsReducer";
import portfolioReducer from "./portfolioReducer";
import authReducer from "./authReducer";
import contactsReducer from "./contactsReducer";
import blogMainReducer from "./blogMainReducer";
import shopReducer from "./shopReducer";
import blogReducer from "./blogReducer";
import postReducer from "./postReducer";
import workReducer from "./workReducer";
import productsHomeReducer from "./productsHomeReducer";
import searchProductsReducer from "./searchReducer";

const rootReducer = combineReducers({
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
  wanted_products: searchProductsReducer,
});

export default rootReducer;
