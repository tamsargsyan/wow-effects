import { configureStore } from "@reduxjs/toolkit";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
// import basketReducer from "../redux/reducers/basketReducer";
// import reviewsReducer from "../redux/reducers/reviewsReducer";
// import partnersReducer from "../redux/reducers/partnersReducer";
// import homeReducer from "../redux/reducers/homeReducer";
// import faqReducer from "./reducers/faqReducer";
// import locationsReducer from "./reducers/locationsReducer";
// import aboutUsReducer from "./reducers/aboutUsReducer";
// import portfolioReducer from "./reducers/portfolioReducer";
// import authReducer from "./reducers/authReducer";
// import contactsReducer from "./reducers/contactsReducer";
// import blogMainReducer from "./reducers/blogMainReducer";
// import shopReducer from "./reducers/shopReducer";
// import blogReducer from "./reducers/blogReducer";
// import postReducer from "./reducers/postReducer";
// import workReducer from "./reducers/workReducer";
// import productsHomeReducer from "./reducers/productsHomeReducer";
// import searchProductsReducer from "./reducers/searchReducer";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
