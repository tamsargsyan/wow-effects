import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/wow' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/wow/about-us' element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
