import AboutCompany from "../components/AboutCompany/AboutCompany";
import Blog from "../components/Blog/Blog";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import FurnitureInfos from "../components/FurnitureInfo/FurnitureInfos";
import MainUI from "../components/MainUI/MainUI";
import Partners from "../components/Partners/Partners";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";

const Home = () => {
  return (
    <div className='home' id='home'>
      <MainUI />
      <AboutCompany />
      <Portfolio />
      <Reviews />
      <Partners />
      <FurnitureInfos />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
