import PagesTitle from "../components/Title/PagesTitle";
import Partners from "../components/Partners/Partners";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Img from "../components/Img";
import ABOUT_US_PAGE_1 from "../assets/ui-fake-images/about-us-page-1.jpg";
import ABOUT_US_PAGE_2 from "../assets/ui-fake-images/about-us-page-2.jpg";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import CountingNumbers from "../components/CountingNumbers/CountingNumbers";
import Footer from "../components/Footer/Footer";
import MeetUs from "../components/MeetUs/MeetUs";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className='aboutUsContainer'>
      <PagesTitle
        title='about us'
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
      <Partners />
      <WhyChooseUs />
      <AboutCompany
        className='aboutUsPageAboutCompanyContainer'
        title='Together, all over the world'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        btn={null}
        img={ABOUT_US_PAGE_2}
      />
      <CountingNumbers />
      <MeetUs />
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
