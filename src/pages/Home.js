import AboutCompany from "../components/AboutCompany/AboutCompany";
import MainUI from "../components/MainUI/MainUI";
import Portfolio from "../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <div className='home' id='home'>
      <MainUI />
      <AboutCompany />
      <Portfolio />
    </div>
  );
};

export default Home;
