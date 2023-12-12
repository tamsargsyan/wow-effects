import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import PagesTitle from "../../components/Title/PagesTitle";
import Button from "../../components/Button/Button";
import { Fragment, useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Trending");

  const handleDropdownClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = item => {
    setSelectedItem(item);
    setShowMenu(false);
  };

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

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className='portfolioPageContainer'>
      <PagesTitle
        title='our works'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        style={{
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          textAlign: "center",
        }}
      />
      <div className='filterPanel container'>
        <div className='filterBtns'>
          {filterBtns.map(btn => (
            <Fragment key={btn.id}>
              <Button
                className='filterBtn'
                text={btn.name}
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
            <p>{selectedItem}</p>
            <Img src={ARROW} alt='Arrow' />
          </div>
          <ul className={`${showMenu && "showMenu"} filterMenu`}>
            {filterStatus.map(st => (
              <li key={st.id} onClick={() => handleMenuItemClick(st.name)}>
                {st.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='container' style={{ marginBottom: "200px" }}>
        <div className='portfolioHolderContainer'>
          {portfolios.map(p => (
            <div
              className='portfolioCard'
              style={{ backgroundImage: `url(${p.img})` }}
              key={p.id}>
              <div className='portfolioCardInfo'>
                <div className='portfolioDetails'>
                  <p className='portfolioDetailsTitle'>{p.name}</p>
                  <p className='portfolioDetailsDescription'>{p.description}</p>
                </div>
                <SecondButton
                  className='moreBtnLarge portfolioWorkMoreBtn'
                  to={`/portfolio/${p.slug}`}
                />
              </div>
            </div>
          ))}
        </div>
        <Button
          className='seeMoreBtn'
          text='See More'
          link={false}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            color: "rgba(255, 255, 255, 0.60)",
            marginTop: "48px",
            width: "100%",
          }}
        />
      </div>
      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;
