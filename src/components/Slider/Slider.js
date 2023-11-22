import { useRef } from "react";
import ARROW_LEFT from "../../assets/icons/arrow-left-white.svg";
import ARROW_RIGHT from "../../assets/icons/arrow-right-white.svg";
import "./style.css";
import { useWindowSize } from "../../hooks/useWindowSize";

const Slider = ({ children, className }) => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const { width } = useWindowSize();

  return (
    <div className={`${className} slider`}>
      <button
        className='sliderBtn sliderLeftBtn'
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}>
        <img src={ARROW_LEFT} alt='Arrow' />
      </button>
      {width < 797 ? (
        className !== "partnersSlider" && (
          <div className='sliderContainer' ref={sliderRef}>
            {children}
          </div>
        )
      ) : (
        <div className='sliderContainer' ref={sliderRef}>
          {children}
        </div>
      )}
      <button
        className='sliderBtn sliderRightBtn'
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}>
        <img src={ARROW_RIGHT} alt='Arrow' />
      </button>
      {width < 797 && className === "partnersSlider" && (
        <div className='partnersSliderWrapper'>
          <div className='sliderContainer' ref={sliderRef}>
            {children}
          </div>
          <div className='sliderBtns'>
            <button
              className='partnerSliderBtn'
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount;
              }}>
              <img src={ARROW_LEFT} alt='Arrow' />
            </button>
            <button
              className='partnerSliderBtn'
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft += scrollAmount;
              }}>
              <img src={ARROW_RIGHT} alt='Arrow' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
