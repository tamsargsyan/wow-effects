import Slider from "../Slider/Slider";
import Title from "../Title/Title";
// import PARTNER_1 from "../../assets/partners/partner-1.svg";
import "./style.css";
import Img from "../Img";
import { STORAGE_URL } from "../../services/apiService";

const Partners = ({ partners }) => {
  const lang = "en";

  return (
    <div className='partnersContainer container'>
      <Title title='Our partners' />
      <Slider className='partnersSlider'>
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
