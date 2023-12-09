import { useParams } from "react-router-dom";
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

const SinglePortfolioPage = () => {
  const { portfolioName } = useParams();
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

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}>
      <div
        className='portfolioOverviewContainer'
        style={{ backgroundImage: `url(${portfolio.img})` }}>
        <div className='portfolioOverviewBackdrop'></div>
        <div className='portfolioOverview container'>
          <div className='portfolioSummary'>
            <p className='portfolioSummaryTitle'>{portfolio.name}</p>
            <p className='portfolioSummaryDescription'>
              {portfolio.description}
            </p>
          </div>
          <div className='portfolioSpecs'>
            <div className='portolioSpecsClient portfolioSpecsItem'>
              <p className='portfolioSpecsTitle'>Client</p>
              <p className='portfolioSpecsDescription'>{portfolio.client}</p>
            </div>
            <div className='portolioSpecsDate portfolioSpecsItem'>
              <p className='portfolioSpecsTitle'>Date</p>
              <p className='portfolioSpecsDescription'>{portfolio.date}</p>
            </div>
            <div className='portolioSpecsRole portfolioSpecsItem'>
              <p className='portfolioSpecsTitle'>Role</p>
              <p className='portfolioSpecsDescription'>{portfolio.role}</p>
            </div>
            <div className='portolioSpecsWebsite portfolioSpecsItem'>
              <p className='portfolioSpecsTitle'>Website</p>
              <p className='portfolioSpecsDescription'>{portfolio.website}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolioAchievements'>
        {portfolioAchievements.map((achievement, i) => (
          <div
            className='portfolioAchievementItem'
            key={i + achievement.title}
            style={{
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            }}>
            <div className='portfolioAchievementItemInfo'>
              <p className='portfolioAchievementItemTitle'>
                {achievement.title}
              </p>
              <div
                className='portfolioAchievementItemDescription'
                dangerouslySetInnerHTML={{ __html: achievement.description }}
              />
            </div>
            <div className='portfolioAchievementImages'>
              {achievement.imgs.map((img, i) => (
                <img src={img} alt='Achievement' key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='portfolioSliderContainer container'>
        <Title title='Related Projects' />
        <Slider className='portfolioSlider'>
          {portfolios.map(prt => (
            <div
              className='portfolioCard singlePortfolioCard'
              style={{ backgroundImage: `url(${prt.img})` }}
              key={prt.id}>
              <div className='portfolioCardInfo'>
                <div className='portfolioDetails'>
                  <p className='portfolioDetailsTitle'>{prt.name}</p>
                  <p className='portfolioDetailsDescription'>
                    {prt.description}
                  </p>
                </div>
                <SecondButton
                  className='moreBtnLarge portfolioWorkMoreBtn'
                  to={`/portfolio/${prt.slug}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </motion.div>
  );
};

export default SinglePortfolioPage;
