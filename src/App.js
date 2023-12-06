import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignInAuth from "./pages/Auth/SignInAuth";
import SignUpAuth from "./pages/Auth/SignUpAuth";

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/wow' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/wow/about-us' element={<AboutUs />} />
          <Route path='/wow/sign-in' element={<SignInAuth auth='sign-in' />} />
          <Route path='/wow/sign-up' element={<SignUpAuth auth='sign-up' />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
