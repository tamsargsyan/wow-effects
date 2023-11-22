import AboutCompany from "../components/AboutCompany/AboutCompany";
import MainUI from "../components/MainUI/MainUI";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";

const Home = () => {
  return (
    <div className='home' id='home'>
      <MainUI />
      <AboutCompany />
      <Portfolio />
      <Reviews />
    </div>
  );
};

export default Home;
