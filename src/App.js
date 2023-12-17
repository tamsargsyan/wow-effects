import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
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

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/sign-in' element={<SignInAuth auth='sign-in' />} />
          <Route path='/sign-up' element={<SignUpAuth auth='sign-up' />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route
            path='/portfolio/:portfolioName'
            element={<SinglePortfolioPage />}
          />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:blogName' element={<Article />} />
          <Route path='/interior-design' element={<InteriorDesign />} />
          <Route path='/customcraft' element={<CustomCraft />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:productName' element={<SingleShop />} />
          <Route path='/checkout/order' element={<CheckoutOrder />} />
          <Route
            path='/checkout/place-order'
            element={<CheckoutPlaceOrder />}
          />
          <Route path='/account/control-panel' element={<ControlPanel />} />
          <Route path='/account/settings' element={<Settings />} />
          <Route path='/account/address' element={<Address />} />
          <Route path='/account/orders' element={<Orders />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
