import { useRef } from "react";
import ARROW_LEFT from "../../assets/icons/arrow-left-white.svg";
import ARROW_RIGHT from "../../assets/icons/arrow-right-white.svg";
import "./style.css";

const Slider = ({ children }) => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;

  return (
    <div className='slider'>
      <button
        className='sliderBtn sliderLeftBtn'
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}>
        <img src={ARROW_LEFT} alt='Arrow' />
      </button>
      <div className='sliderContainer' ref={sliderRef}>
        {children}
      </div>
      <button
        className='sliderBtn sliderRightBtn'
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}>
        <img src={ARROW_RIGHT} alt='Arrow' />
      </button>
    </div>
  );
};

export default Slider;
