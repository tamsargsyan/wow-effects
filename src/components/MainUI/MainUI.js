import SEARCH from "../../assets/icons/search-pink.svg";
import ARROW_LEFT from "../../assets/icons/arrow-left-white.svg";
import ARROW_RIGHT from "../../assets/icons/arrow-right-white.svg";
import Button from "../Button/Button";
import "./style.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import SecondButton from "../SecondButton/SecondButton";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import Img from "../Img";
import { STORAGE_URL } from "../../services/apiService";
import { motion } from "framer-motion";
import { useState } from "react";

const MainUI = ({ go_shopping, slides }) => {
  const { width } = useWindowSize();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const lang = "en";

  return (
    <div className='mainUiContainer container'>
      <div className='mainUI_wrapper'>
        {width < 797 && (
          <div
            className='box sidebar'
            // style={{ backgroundImage: `url(${HOUSE_DESIGN})` }}
          >
            {/* <img
            src={HOUSE_DESIGN}
            alt='House Design'
            className='houseDesignImg'
          /> */}
            {slides.map((slide, index) => {
              const distanceFromActive = index - currentQuestionIndex;
              let x = 0;
              if (distanceFromActive === 0) {
                x = 0;
              } else if (distanceFromActive === 1) {
                x = 120;
              } else if (distanceFromActive === -1) {
                if (currentQuestionIndex === 7) x = -300;
                else {
                  x = -120;
                }
              } else {
                x = distanceFromActive * 100;
              }
              return (
                <motion.div
                  className='mainUIHouseDesignSliderItem'
                  style={{
                    position: "absolute",
                    // top: "50%",
                    // left: "50%",
                    top: 0,
                    left: 0,
                    transform: `translateY(0) translateX(${x}%)`,
                    opacity: Math.max(
                      0.1,
                      1 - 0.2 * Math.abs(distanceFromActive)
                    ),
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transform: `translateY(0) translateX(${x}%)`,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "ease",
                  }}
                  key={index}>
                  <div className='mainUIHouseDesignContentImgs'>
                    <Img src={`${STORAGE_URL}/${slide.image}`} />
                  </div>
                  <div className='mainUIHouseDesignContent'>
                    <div className='mainUIHouseDesignArrows'>
                      <button
                        className='mainUIHouseDesignLeftBtn'
                        onClick={() =>
                          currentQuestionIndex === 0
                            ? setCurrentQuestionIndex(slides.length - 1)
                            : setCurrentQuestionIndex(prev => prev - 1)
                        }>
                        <img src={ARROW_LEFT} alt='Arrow' />
                      </button>
                      <button
                        className='mainUIHouseDesignRightBtn'
                        onClick={() =>
                          currentQuestionIndex === slides.length - 1
                            ? setCurrentQuestionIndex(0)
                            : setCurrentQuestionIndex(prev => prev + 1)
                        }>
                        <img src={ARROW_RIGHT} alt='Arrow' />
                      </button>
                    </div>
                    <div className='mainUIHouseDesignInfo'>
                      <p className='mainUIHouseDesignInfo_title'>
                        {slide[`heading_${lang}`]}
                      </p>
                      <p className='mainUIHouseDesignInfo_desc'>
                        {removeHtmlTags(slide[`description_${lang}`])}
                      </p>
                    </div>
                    <Button
                      text={slide[`link_title_${lang}`]}
                      link={true}
                      to={slide.link}
                      className='mainUIHouseDesignInfo_applyBtn'
                      style={{
                        background: "var(--secondary-color-white)",
                        color: "var(--main-color-pink)",
                        textDecoration: "none",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        <div
          className='box header'
          style={{
            backgroundImage: `url(${STORAGE_URL}/${go_shopping.image})`,
          }}>
          {/* <img
            src={GO_SHOPPING}
            alt='House Design'
            className='houseDesignImg'
          /> */}
          <div className='mainUIHouseDesignContent'>
            <div className='mainUIHouseDesignInfo'>
              <p className='mainUIHouseDesignInfo_title'>
                {go_shopping[`heading_${lang}`]}
              </p>
              <p className='mainUIHouseDesignInfo_desc'>
                {removeHtmlTags(go_shopping[`description_${lang}`])}
              </p>
            </div>
            <SecondButton
              className='moreBtnLarge'
              to={go_shopping.link}
              target='_blank'
            />
          </div>
        </div>
        {width > 797 && (
          <div
            className='box sidebar'
            // style={{ backgroundImage: `url(${HOUSE_DESIGN})` }}
          >
            {/* <img
            src={HOUSE_DESIGN}
            alt='House Design'
            className='houseDesignImg'
          /> */}
            {slides.map((slide, index) => {
              const distanceFromActive = index - currentQuestionIndex;
              let x = 0;
              if (distanceFromActive === 0) {
                x = 0;
              } else if (distanceFromActive === 1) {
                x = 120;
              } else if (distanceFromActive === -1) {
                if (currentQuestionIndex === 7) x = -300;
                else {
                  x = -120;
                }
              } else {
                x = distanceFromActive * 100;
              }
              return (
                <motion.div
                  className='mainUIHouseDesignSliderItem'
                  style={{
                    position: "absolute",
                    // top: "50%",
                    // left: "50%",
                    top: 0,
                    left: 0,
                    transform: `translateY(0) translateX(${x}%)`,
                    opacity: Math.max(
                      0.1,
                      1 - 0.2 * Math.abs(distanceFromActive)
                    ),
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transform: `translateY(0) translateX(${x}%)`,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "ease",
                  }}
                  key={index}>
                  <div className='mainUIHouseDesignContentImgs'>
                    <Img src={`${STORAGE_URL}/${slide.image}`} />
                  </div>
                  <div className='mainUIHouseDesignContent'>
                    <div className='mainUIHouseDesignArrows'>
                      <button
                        className='mainUIHouseDesignLeftBtn'
                        onClick={() =>
                          currentQuestionIndex === 0
                            ? setCurrentQuestionIndex(slides.length - 1)
                            : setCurrentQuestionIndex(prev => prev - 1)
                        }>
                        <img src={ARROW_LEFT} alt='Arrow' />
                      </button>
                      <button
                        className='mainUIHouseDesignRightBtn'
                        onClick={() =>
                          currentQuestionIndex === slides.length - 1
                            ? setCurrentQuestionIndex(0)
                            : setCurrentQuestionIndex(prev => prev + 1)
                        }>
                        <img src={ARROW_RIGHT} alt='Arrow' />
                      </button>
                    </div>
                    <div className='mainUIHouseDesignInfo'>
                      <p className='mainUIHouseDesignInfo_title'>
                        {slide[`heading_${lang}`]}
                      </p>
                      <p className='mainUIHouseDesignInfo_desc'>
                        {removeHtmlTags(slide[`description_${lang}`])}
                      </p>
                    </div>
                    <Button
                      text={slide[`link_title_${lang}`]}
                      link={true}
                      to={slide.link}
                      className='mainUIHouseDesignInfo_applyBtn'
                      style={{
                        background: "var(--secondary-color-white)",
                        color: "var(--main-color-pink)",
                        textDecoration: "none",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        <div className='box content'>
          <p className='mainUISearchTitle'>Search for any product</p>
          <div className='search'>
            <img src={SEARCH} alt='Search' />
            <input placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainUI;
