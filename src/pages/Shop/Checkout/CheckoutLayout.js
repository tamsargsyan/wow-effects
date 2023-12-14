import React from "react";
import CheckoutStage from "./CheckoutStage";
import { motion } from "framer-motion";
import { animate, initial } from "../../../utils/transition";
import Footer from "../../../components/Footer/Footer";
import "./style.css";

const CheckoutLayout = ({ children }) => {
  return (
    <motion.div initial={initial} animate={animate} className='checkoutLayout'>
      <CheckoutStage />
      <div className='checkoutOrderContainer'>{children}</div>
      <Footer />
    </motion.div>
  );
};

export default CheckoutLayout;
