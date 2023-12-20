import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignInAuth from "./pages/Auth/SignInAuth";
import SignUpAuth from "./pages/Auth/SignUpAuth";
import Contact from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import { useEffect } from "react";
import SinglePortfolioPage from "./pages/Portfolio/SinglePortfolioPage";
import ControlPanel from "./pages/Account/ControlPanel/ControlPanel";
import Settings from "./pages/Account/Settings/Settings";
import Address from "./pages/Account/Address/Address";
import Orders from "./pages/Account/Orders/Orders";
import Shop from "./pages/Shop/Shop";
import SingleShop from "./pages/Shop/SingleShop/SingleShop";
import CheckoutOrder from "./pages/Shop/Checkout/CheckoutOrder";
import CheckoutPlaceOrder from "./pages/Shop/Checkout/CheckoutPlaceOrder";
import BlogPage from "./pages/BlogPage/BlogPage";
import InteriorDesign from "./pages/InteriorDesign/InteriorDesign";
import CustomCraft from "./pages/CustomCraft/CustomCraft";
import Article from "./pages/Article/Article";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Career from "./pages/Career/Career";
import Position from "./pages/Position/Position";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions/authActions";
import ResetPassword from "./pages/Auth/ResetPassword";
import Cookies from "js-cookie";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("user") &&
      !isAuthenticated
    ) {
      dispatch(login());
    }
  }, [dispatch, isAuthenticated]);

  const lang = Cookies.get("i18next") || "en";

  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path={`/${lang}/`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`/${lang}/about-us`} element={<AboutUs />} />
          <Route
            path={`/${lang}/sign-in`}
            element={<SignInAuth auth='sign-in' />}
          />
          <Route
            path={`/${lang}/sign-up`}
            element={<SignUpAuth auth='sign-up' />}
          />
          <Route path={`/${lang}/passwordReset`} element={<ResetPassword />} />
          <Route path={`/${lang}/contact-us`} element={<Contact />} />
          <Route path={`/${lang}/portfolio`} element={<PortfolioPage />} />
          <Route
            path={`/${lang}/portfolio/:portfolioName`}
            element={<SinglePortfolioPage />}
          />
          <Route path={`/${lang}/blog`} element={<BlogPage />} />
          <Route path={`/${lang}/blog/:blogName`} element={<Article />} />
          <Route
            path={`/${lang}/interior-design`}
            element={<InteriorDesign />}
          />
          <Route path={`/${lang}/customcraft`} element={<CustomCraft />} />
          <Route path={`/${lang}/career`} element={<Career />} />
          <Route path={`/${lang}/career/:position`} element={<Position />} />
          <Route path={`/${lang}/privacy-policy`} element={<PrivacyPolicy />} />
          <Route path={`/${lang}/shop`} element={<Shop />} />
          <Route path={`/${lang}/shop/:productName`} element={<SingleShop />} />
          <Route path={`/${lang}/checkout/order`} element={<CheckoutOrder />} />
          <Route
            path={`/${lang}/checkout/place-order`}
            element={<CheckoutPlaceOrder />}
          />
          <Route
            path={`/${lang}/account/control-panel`}
            element={<ControlPanel />}
          />
          <Route path={`/${lang}/account/settings`} element={<Settings />} />
          <Route path={`/${lang}/account/address`} element={<Address />} />
          <Route path={`/${lang}/account/orders`} element={<Orders />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
