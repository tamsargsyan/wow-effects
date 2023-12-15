import { motion } from "framer-motion";
import "./style.css";
import PagesTitle from "../../components/Title/PagesTitle";
import { animate, initial } from "../../utils/transition";
import Img from "../../components/Img";
import ABOUT_US_PAGE_1 from "../../assets/ui-fake-images/about-us-page-1.jpg";
import Footer from "../../components/Footer/Footer";

const InteriorDesign = () => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      className='aboutUsContainer'>
      <PagesTitle
        title='Interior Design'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Img
        src={ABOUT_US_PAGE_1}
        alt='Drawing'
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
        }}
      />
      <Footer slider={true} />
    </motion.div>
  );
};

export default InteriorDesign;
