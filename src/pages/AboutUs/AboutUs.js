import PagesTitle from "../../components/Title/PagesTitle";
import Partners from "../../components/Partners/Partners";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Img from "../../components/Img";
// import ABOUT_US_PAGE_1 from "../assets/ui-fake-images/about-us-page-1.jpg";
// import ABOUT_US_PAGE_2 from "../../assets/ui-fake-images/about-us-page-2.jpg";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
// import CountingNumbers from "../../components/CountingNumbers/CountingNumbers";
import Footer from "../../components/Footer/Footer";
import MeetUs from "../../components/MeetUs/MeetUs";
import { motion } from "framer-motion";
import { animate, initial } from "../../utils/transition";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../../redux/actions/partnersActions";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { fetchAboutUs } from "../../redux/actions/aboutUsActions";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { STORAGE_URL } from "../../services/apiService";
import Reviews from "../../components/Reviews/Reviews";
import { fetchReviews } from "../../redux/actions/reviewsActions";
import Blog from "../../components/Blog/Blog";
import Button from "../../components/Button/Button";
import "./style.css";

const AboutUs = () => {
  const dispatch = useDispatch();
  const lang = "en";

  useEffect(() => {
    dispatch(fetchPartners());
    dispatch(fetchAboutUs());
    dispatch(fetchReviews());
  }, [dispatch]);

  const partners = useSelector(state => state.partners);
  const about = useSelector(state => state.about);
  const reviews = useSelector(state => state.reviews);
  console.log(about);
  if (
    partners.partners === null &&
    about.about === null &&
    reviews.reviews === null
  )
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className='aboutUsContainer'>
      {about.about && partners.partners && reviews.reviews && (
        <>
          <PagesTitle
            title={about.about.about_main[`title_${lang}`]}
            description={removeHtmlTags(
              about.about.about_main[`description_${lang}`]
            )}
          />
          <Img
            src={`${STORAGE_URL}/${about.about.about_main.image}`}
            alt='Drawing'
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
            }}
          />
          <Partners partners={partners.partners} />
          <AboutCompany
            // countingNumbers={true}
            customer_savings={about.about.about_main.customer_savings}
            downloads={about.about.about_main.downloads}
            hours_saved={about.about.about_main.hours_saved}
            year_growth={about.about.about_main.year_growth}
            className='aboutUsPageAboutCompanyContainer'
            title={about.about.about_main[`secondary_title_${lang}`]}
            description={removeHtmlTags(
              about.about.about_main[`secondary_description_${lang}`]
            )}
            btn={null}
            img={`${STORAGE_URL}/${about.about.about_main.secondary_image}`}
          />
          <Reviews reviews={reviews.reviews} />
          <WhyChooseUs why_choose_us={about.about.why_choose_us} />
          <MeetUs meet_us={about.about.meet_us} />
          <Blog />
          <div className='hiringContainer'>
            <p className='hiringTitle'>We're hiring!</p>
            <p className='hiringDescription'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <Button
              link={true}
              to='/career'
              text='Join our team'
              style={{
                backgroundColor: "var(--main-color-pink)",
                border: "none",
                fontFamily: "Poppins-600",
                borderRadius: "var(--main-border-radius)",
                color: "var(--secondary-color-white)",
                display: "block",
                width: "fit-content",
              }}
              className='bottomHeaderRegisterBtn'
            />
          </div>
          <Footer slider={false} />
        </>
      )}
    </motion.div>
  );
};

export default AboutUs;
