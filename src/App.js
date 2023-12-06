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
import Shop from "./pages/Shop";
import { useEffect } from "react";

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
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
