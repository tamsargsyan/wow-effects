import Footer from "../../components/Footer/Footer";
import SEARCH from "../../assets/icons/search-pink.svg";
import "./style.css";
import Button from "../../components/Button/Button";
import { Fragment, useState } from "react";
import SecondButton from "../../components/SecondButton/SecondButton";
import LOCATION from "../../assets/icons/location-white.svg";
import TIME from "../../assets/icons/time-white.svg";
import Img from "../../components/Img";
import ARROW from "../../assets/icons/arrow-down-white.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();

  const filterBtns = [
    {
      id: 1,
      name: "View All",
    },
    {
      id: 2,
      name: "Marketing",
    },
    {
      id: 3,
      name: "Design",
    },
    {
      id: 4,
      name: "Developement",
    },
    {
      id: 5,
      name: "Finance",
    },
    {
      id: 6,
      name: "Managemet",
    },
  ];

  const vacancies = [
    {
      id: 1,
      name: "Product Designer",
    },
    {
      id: 1,
      name: "Product Designer",
    },
    {
      id: 1,
      name: "Product Designer",
    },
    {
      id: 1,
      name: "Product Designer",
    },
    {
      id: 1,
      name: "Product Designer",
    },
    {
      id: 1,
      name: "Product Designer",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Product Designer");

  const handleDropdownClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = item => {
    setSelectedItem(item);
    setShowMenu(false);
  };

  const { width } = useWindowSize();

  return (
    <div>
      <div className='careerContainer'>
        <div className='careerTitleContainer'>
          <p className='careerTitle'>Be part of our mission</p>
          <p className='careerDescription'>
            We are looking for passionante people to join us on our mission. We
            value flat hierarchies, clear communicatyion, and full ownership and
            responsability.
          </p>
        </div>
        <div className='positionsContainer'>
          <div className='positionsFilteringContainer'>
            <p className='positionsFilteringTitle'>
              Open Positions <span>17 results</span>
            </p>
          </div>
          <div className='positionsFilertingBtns'>
            {width > 1100 ? (
              <div className='positionsBtns'>
                {filterBtns.map((btn, i) => (
                  <Fragment key={i}>
                    <Button
                      // btnType='submit'
                      link={false}
                      text={btn.name}
                      style={{
                        backgroundColor:
                          i !== 0
                            ? "rgba(255, 255, 255, 0.05)"
                            : "var(--main-color-pink)",
                        border: "none",
                        //   fontFamily: "Poppins-600",
                        //   borderRadius: "var(--main-border-radius)",
                        color: "var(--secondary-color-white)",
                        width: "fit-content",
                      }}
                      className='filterBtn'
                    />
                  </Fragment>
                ))}
              </div>
            ) : (
              <div className='filterDropHolder' onClick={handleDropdownClick}>
                <div className='filterDropdown'>
                  <p>{selectedItem}</p>
                  <Img src={ARROW} alt='Arrow' />
                </div>
                <ul className={`${showMenu && "showMenu"} filterMenu`}>
                  {vacancies.map(st => (
                    <li
                      key={st.id}
                      onClick={() => handleMenuItemClick(st.name)}>
                      {st.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className='search'>
              <Img src={SEARCH} alt='Search' />
              <input placeholder={t("placeholder.searcg")} />
            </div>
          </div>
          <div>
            <div className='vacanciesContainer'>
              {vacancies.map((vac, i) => (
                <div className='vacancy' key={i}>
                  <div className='vacancyDetails'>
                    <div className='vacancyDetailsTitleContainer'>
                      <p className='vacancyDetailsTitle'>Product Designer</p>
                      <button className='vacancyDetailsTitleBtn'>Design</button>
                    </div>
                    <p className='vacancyDetailsDescription'>
                      We are looking for a mid-level product designer to join
                      our team.
                    </p>
                    <div className='vacancyInfo'>
                      <div>
                        <Img src={LOCATION} alt='Location' />
                        On site
                      </div>
                      <div>
                        <Img src={TIME} alt='Time' />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <div className='vacancyBtn'>
                    <SecondButton
                      className='moreBtnLarge vacancyBtnLink'
                      to='/'
                      // target='_blank'
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
                // marginTop: "40px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
