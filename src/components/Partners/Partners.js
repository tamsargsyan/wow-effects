import Slider from "../Slider/Slider";
import Title from "../Title/Title";
// import PARTNER_1 from "../../assets/partners/partner-1.svg";
import "./style.css";
import Img from "../Img";
import { STORAGE_URL } from "../../services/apiService";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const Partners = ({ partners }) => {
  const lang = "en";
  const [showArrowBtns, setShowArrowBtns] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const sliderContainer = document.querySelector(".slider ");
    const items = document.querySelectorAll(".partnerWrapper");
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

  return (
    <div className='partnersContainer container'>
      <Title title='Our partners' />
      <Slider className='partnersSlider' showArrowBtns={showArrowBtns}>
        {partners.partners.map(partner => (
          <div className='partnerWrapper' key={partner.id}>
            <div className='partner'>
              <Img
                src={`${STORAGE_URL}/${partner.logo}`}
                alt={partner.logo_title_en}
              />
              <p>{partner[`logo_title_${lang}`]}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
