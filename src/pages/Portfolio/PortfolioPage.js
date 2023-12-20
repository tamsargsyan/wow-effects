import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import PagesTitle from "../../components/Title/PagesTitle";
import Button from "../../components/Button/Button";
import { Fragment, useEffect, useState } from "react";
import ARROW from "../../assets/icons/arrow-down-white.svg";
import Img from "../../components/Img";
import IMG_1 from "../../assets/ui-fake-images/portfolio-work-1.svg";
import IMG_2 from "../../assets/ui-fake-images/portfolio-work-2.svg";
import IMG_3 from "../../assets/ui-fake-images/portfolio-work-3.svg";
import IMG_4 from "../../assets/ui-fake-images/portfolio-work-4.svg";
import IMG_5 from "../../assets/ui-fake-images/portfolio-work-5.svg";
import "./style.css";
import SecondButton from "../../components/SecondButton/SecondButton";
import { animate, initial } from "../../utils/transition";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPortfolio,
  fetchWorkCategories,
  fetchWorkTypes,
} from "../../redux/actions/portfolioActions";
import Spinner from "../../components/Spinner/Spinner";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { STORAGE_URL } from "../../services/apiService";

export const filterStatus = [
  {
    id: 1,
    name: "Trending",
  },
  {
    id: 2,
    name: "Trending",
  },
  {
    id: 3,
    name: "Trending",
  },
];

export const portfolios = [
  {
    id: 1,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_1,
    slug: "portfolio1",
  },
  {
    id: 2,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_2,
    slug: "portfolio2",
  },
  {
    id: 3,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_3,
    slug: "portfolio3",
  },
  {
    id: 4,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_4,
    slug: "portfolio4",
  },
  {
    id: 5,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_5,
    slug: "portfolio5",
  },
  {
    id: 6,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_1,
    slug: "portfolio6",
  },
  {
    id: 7,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_2,
    slug: "portfolio7",
  },
  {
    id: 8,
    name: "Name of the work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: IMG_3,
    slug: "portfolio8",
  },
];

const PortfolioPage = () => {
  const lang = "en";
  const filterBtns = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Custom furniture production",
    },
    {
      id: 3,
      name: "Interior Design",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
    dispatch(fetchWorkCategories());
    dispatch(fetchWorkTypes());
  }, [dispatch]);

  const portfolio = useSelector(state => state.portfolio);
  const workCategories = useSelector(state => state.portfolio.workCategories);
  const workTypes = useSelector(state => state.portfolio.workTypes);

  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log(workCategories);

  useEffect(() => {
    workTypes && setSelectedItem(workTypes.work_types[0]);
  }, workTypes);

  const handleDropdownClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = item => {
    setSelectedItem(item);
    setShowMenu(false);
  };

  if (
    portfolio.portfolio === null &&
    workCategories === null &&
    workTypes === null &&
    selectedItem === null
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
      className='portfolioPageContainer'>
      {portfolio.portfolio && workCategories && workTypes && selectedItem && (
        <>
          <PagesTitle
            title={portfolio.portfolio.portfolio_main[`heading_${lang}`]}
            description={removeHtmlTags(
              portfolio.portfolio.portfolio_main[`description_${lang}`]
            )}
            style={{
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
              textAlign: "center",
            }}
          />
          <div className='filterPanel container'>
            <div className='filterBtns'>
              {workCategories.work_categories.map(btn => (
                <Fragment key={btn.id}>
                  <Button
                    className='filterBtn'
                    text={btn[`title_${lang}`]}
                    link={true}
                    style={{
                      background: false
                        ? "var(--main-color-pink)"
                        : "rgba(255, 255, 255, 0.05)",
                      color: false
                        ? "var(--secondary-color-white)"
                        : "rgba(255, 255, 255, 0.60)",
                    }}
                  />
                </Fragment>
              ))}
            </div>
            <div className='filterDropHolder' onClick={handleDropdownClick}>
              <div className='filterDropdown'>
                <p>{selectedItem[`title_${lang}`]}</p>
                <Img src={ARROW} alt='Arrow' />
              </div>
              <ul className={`${showMenu && "showMenu"} filterMenu`}>
                {workTypes.work_types.map(st => (
                  <li key={st.id} onClick={() => handleMenuItemClick(st)}>
                    {st[`title_${lang}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='container' style={{ marginBottom: "200px" }}>
            <div className='portfolioHolderContainer'>
              {portfolio.portfolio.portfolio_main.works.map(p => (
                <div
                  className='portfolioCard'
                  style={{
                    backgroundImage: `url(${STORAGE_URL}/${p.image})`,
                  }}
                  key={p.id}>
                  <div className='portfolioCardInfo'>
                    <div className='portfolioDetails'>
                      <p className='portfolioDetailsTitle'>
                        {p[`title_${lang}`]}
                      </p>
                      <p className='portfolioDetailsDescription'>
                        {removeHtmlTags(p[`description_${lang}`])}
                      </p>
                    </div>
                    <SecondButton
                      className='moreBtnLarge portfolioWorkMoreBtn'
                      to={`/portfolio/${p.id}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* <Button
              className='seeMoreBtn'
              text='See More'
              link={false}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 0.60)",
                marginTop: "48px",
                width: "100%",
              }}
            /> */}
          </div>
          <Footer />
        </>
      )}
    </motion.div>
  );
};

export default PortfolioPage;
