import AboutCompany from "../components/AboutCompany/AboutCompany";
import Blog from "../components/Blog/Blog";
import Button from "../components/Button/Button";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import FurnitureInfos from "../components/FurnitureInfo/FurnitureInfos";
import MainUI from "../components/MainUI/MainUI";
import Partners from "../components/Partners/Partners";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";
import IMG from "../assets/ui-fake-images/about-company-1.jpg";
import BG from "../assets/ui-fake-images/about-company-bg.svg";

const Home = () => {
  return (
    <div className='home' id='home'>
      <MainUI />
      <AboutCompany
        title='about our company'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        btn={
          <Button
            link={true}
            text='Read More'
            className='aboutCompanyReadMoreBtn'
            style={{
              fontFamily: "Poppins-600",
              textDecoration: "none",
              color: "var(--secondary-color-white)",
              background: "var(--main-color-pink)",
              borderRadius: "8px",
              display: "block",
              width: "fit-content",
            }}
          />
        }
        img={IMG}
        bgImg={BG}
      />
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
