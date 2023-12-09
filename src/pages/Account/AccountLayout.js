import Sidebar from "./Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import "./style.css";
import { animate, initial } from "../../utils/transition";

const AccountLayout = ({ children }) => {
  return (
    <div className='accountLayout'>
      <div className='accountDashboardArea'>
        <Sidebar />
        <motion.div
          initial={initial}
          animate={animate}
          className='accountContent'>
          {children}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountLayout;
