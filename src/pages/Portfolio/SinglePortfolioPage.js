import { Link, useParams } from "react-router-dom";
import "./singlePortfolio.css";
import { motion } from "framer-motion";
import ABOUT_US_PAGE_1 from "../../assets/ui-fake-images/about-us-page-1.jpg";
import Footer from "../../components/Footer/Footer";
import PORTFOLIO_IMG_1 from "../../assets/ui-fake-images/portfolio-page-1.jpg";
import PORTFOLIO_IMG_2 from "../../assets/ui-fake-images/portfolio-page-2.jpg";
import PORTFOLIO_IMG_3 from "../../assets/ui-fake-images/portfolio-page-3.jpg";
import Slider from "../../components/Slider/Slider";
import SecondButton from "../../components/SecondButton/SecondButton";
import { portfolios } from "./PortfolioPage";
import Title from "../../components/Title/Title";
import { animate, initial } from "../../utils/transition";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWork } from "../../redux/actions/workActions";
import Spinner from "../../components/Spinner/Spinner";
import { STORAGE_URL } from "../../services/apiService";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import Img from "../../components/Img";

const SinglePortfolioPage = () => {
  const { portfolioName } = useParams();
  const lang = "en";
  const portfolio = {
    id: 1,
    img: ABOUT_US_PAGE_1,
    slug: portfolioName,
    name: "Project name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    client: "Full Name",
    date: "March 2023",
    role: "Role name",
    website: "Website link",
  };

  const portfolioAchievements = [
    {
      id: 1,
      title: "The opportunity",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>",
      imgs: [PORTFOLIO_IMG_1, PORTFOLIO_IMG_2, PORTFOLIO_IMG_3],
    },
    {
      id: 2,
      title: "What we did",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>",
      imgs: [PORTFOLIO_IMG_1, PORTFOLIO_IMG_2, PORTFOLIO_IMG_3],
    },
    {
      id: 3,
      title: "The outcome",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>",
      imgs: [PORTFOLIO_IMG_1, PORTFOLIO_IMG_2, PORTFOLIO_IMG_3],
    },
  ];

  const { width } = useWindowSize();
  const [showArrowBtns, setShowArrowBtns] = useState(false);

  useEffect(() => {
    const sliderContainer = document.querySelector(".slider ");
    const items = document.querySelectorAll(".portfolioCard");
    const gap = 32;
    let totalWidth = 0;
    if (sliderContainer && items) {
      items.forEach(img => {
        //@ts-ignore
        totalWidth += img.offsetWidth + gap;
      });
      //@ts-ignore
      setShowArrowBtns(totalWidth > sliderContainer.offsetWidth);
    }
  }, [width]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWork(portfolioName));
  }, [dispatch]);

  const work = useSelector(state => state.work);
  console.log(work);

  if (work.work === null && work.loading)
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div initial={initial} animate={animate}>
      {work.work && (
        <>
          <div
            className='portfolioOverviewContainer'
            style={{
              backgroundImage: `url(${STORAGE_URL}/${work.work.work.image})`,
            }}>
            <div className='portfolioOverviewBackdrop'></div>
            <div className='portfolioOverview container'>
              <div className='portfolioSummary'>
                <p className='portfolioSummaryTitle'>
                  {work.work.work[`title_${lang}`]}
                </p>
                <p className='portfolioSummaryDescription'>
                  {removeHtmlTags(work.work.work[`description_${lang}`])}
                </p>
              </div>
              <div className='portfolioSpecs'>
                <div className='portolioSpecsClient portfolioSpecsItem'>
                  <p className='portfolioSpecsTitle'>Client</p>
                  <p className='portfolioSpecsDescription'>
                    {work.work.work[`client_${lang}`]}
                  </p>
                </div>
                <div className='portolioSpecsDate portfolioSpecsItem'>
                  <p className='portfolioSpecsTitle'>Date</p>
                  <p className='portfolioSpecsDescription'>
                    {work.work.work.date}
                  </p>
                </div>
                <div className='portolioSpecsRole portfolioSpecsItem'>
                  <p className='portfolioSpecsTitle'>Role</p>
                  <p className='portfolioSpecsDescription'>
                    {work.work.work[`role_${lang}`]}
                  </p>
                </div>
                <div className='portolioSpecsWebsite portfolioSpecsItem'>
                  <p className='portfolioSpecsTitle'>Website</p>
                  <p className='portfolioSpecsDescription'>
                    <Link to='/websiteLink'>{work.work.work.website}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='portfolioAchievements'>
            {work.work.work.work_parts.map((achievement, i) => (
              <div
                className='portfolioAchievementItem'
                key={i}
                style={{
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                }}>
                <div className='portfolioAchievementItemInfo'>
                  <p className='portfolioAchievementItemTitle'>
                    {achievement[`title_${lang}`]}
                  </p>
                  <div
                    className='portfolioAchievementItemDescription'
                    dangerouslySetInnerHTML={{
                      __html: achievement[`description_${lang}`],
                    }}
                  />
                </div>
                <div className='portfolioAchievementImages'>
                  {/* {achievement.imgs.map((img, i) => (
                    <img src={img} alt='Achievement' key={i} />
                  ))} */}
                  <Img
                    src={`${STORAGE_URL}/${achievement.image_1}`}
                    alt='Portfolio'
                  />
                  <Img
                    src={`${STORAGE_URL}/${achievement.image_2}`}
                    alt='Portfolio'
                  />
                  <Img
                    src={`${STORAGE_URL}/${achievement.image_3}`}
                    alt='Portfolio'
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='portfolioSliderContainer container'>
            <Title title='Related Projects' />
            <Slider className='portfolioSlider' showArrowBtns={showArrowBtns}>
              {work.work.related_projects.map(prt => (
                <div
                  className='portfolioCard singlePortfolioCard'
                  style={{
                    backgroundImage: `url(${STORAGE_URL}/${prt.image})`,
                  }}
                  key={prt.id}>
                  <div className='portfolioCardInfo'>
                    <div className='portfolioDetails'>
                      <p className='portfolioDetailsTitle'>
                        {prt[`title_${lang}`]}
                      </p>
                      <p className='portfolioDetailsDescription'>
                        {removeHtmlTags(prt[`description_${lang}`])}
                      </p>
                    </div>
                    <SecondButton
                      className='moreBtnLarge portfolioWorkMoreBtn'
                      to={`/portfolio/${prt.id}`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <Footer />
        </>
      )}
    </motion.div>
  );
};

export default SinglePortfolioPage;
