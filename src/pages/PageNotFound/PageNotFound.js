import IMG_404 from "../../assets/not-found-404.svg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Img from "../../components/Img";
import { motion } from "framer-motion";
import { initial, animate } from "../../utils/transition";
import "./style.css";

const PageNotFound = () => {
  return (
    <motion.div initial={initial} animate={animate}>
      <div className='pageNotFoundContainer'>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          className='img404'>
          <Img src={IMG_404} alt='404' />
        </motion.div>
        <div className='pageNotFoundTitleContainer'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className='pageNotFoundTitle'>Oops...</p>
          </motion.div>
          <p className='pageNotFoundDescription'>
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
          <Button
            text='Go Home'
            className='pageNotFoundBtn'
            style={{
              background: "var(--main-color-pink)",
              color: "var(--secondary-color-white)",
              border: "none",
              display: "block",
              textAlign: "center",
              textDecoration: "none",
            }}
            link={true}
            // onClick={() => dispatch(closeBasketModal())}
            to='/'
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PageNotFound;
