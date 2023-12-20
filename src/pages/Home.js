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
import BG from "../assets/ui-fake-images/about-company-bg.svg";
import { motion } from "framer-motion";
import { animate, initial } from "../utils/transition";
import { STORAGE_URL } from "../services/apiService";
import { removeHtmlTags } from "../Helpers/removeHtmlTags";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../redux/actions/reviewsActions";
import { fetchPartners } from "../redux/actions/partnersActions";
import { fetchHome } from "../redux/actions/homeActions";
import Spinner from "../components/Spinner/Spinner";
import { fetchFAQ } from "../redux/actions/faqActions";
import Locations from "../components/Locations/Locations";
import { fetchLocations } from "../redux/actions/locationsActions";
import { fetchProductsHome } from "../redux/actions/productsHomeActions";
import Cookies from "js-cookie";

const Home = () => {
  const lang = Cookies.get("i18next") || "en";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchPartners());
    dispatch(fetchHome());
    dispatch(fetchFAQ());
    dispatch(fetchLocations());
    dispatch(fetchProductsHome());
  }, [dispatch]);

  const home = useSelector(state => state.home);
  const reviews = useSelector(state => state.reviews);
  const partners = useSelector(state => state.partners);
  const faq = useSelector(state => state.faq);
  const locations = useSelector(state => state.locations);
  const productsHome = useSelector(state => state.productsHome);

  if (
    home.loading &&
    home.home === null &&
    reviews.loading &&
    reviews.reviews === null &&
    partners.loading &&
    partners.partners === null &&
    faq.loading &&
    faq.faq === null &&
    locations.locations === null &&
    productsHome.productsHome === null
  )
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div initial={initial} animate={animate} className='home' id='home'>
      {home.home &&
        reviews.reviews &&
        partners.partners &&
        faq.faq &&
        locations.locations?.locations &&
        productsHome.productsHome && (
          <>
            <MainUI
              go_shopping={home.home.go_shopping}
              slides={home.home.slides}
            />
            <AboutCompany
              title={home.home.about_section[`heading_${lang}`]}
              description={removeHtmlTags(
                home.home.about_section[`description_${lang}`]
              )}
              btn={
                <Button
                  link={true}
                  to={`/${home.home.about_section.link}`}
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
              img={`${STORAGE_URL}/${home.home.about_section.image}`}
              bgImg={BG}
            />
            <Portfolio portfolio_main={home.home.portfolio_main} />
            <Reviews reviews={reviews.reviews} />
            <Partners partners={partners.partners} />
            <FurnitureInfos
              product_suggestions={productsHome.productsHome.products_in_home}
            />
            <Blog />
            <FAQ title='faq' className='mainFAQ' data={faq.faq} />
            <Locations locations={locations.locations?.locations} />
            <Footer slider={false} />
          </>
        )}
    </motion.div>
  );
};

export default Home;
