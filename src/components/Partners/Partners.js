import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import PARTNER_1 from "../../assets/partners/partner-1.svg";
import "./style.css";

const Partners = () => {
  const partners = [
    {
      id: 1,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
    {
      id: 2,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
    {
      id: 3,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
    {
      id: 4,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
    {
      id: 5,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
    {
      id: 6,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
    {
      id: 7,
      img: PARTNER_1,
      name: "Lorem Ipsum",
    },
  ];
  return (
    <div className='partnersContainer container'>
      <Title title='Our partners' />
      <Slider className='partnersSlider'>
        {partners.map(partner => (
          <div className='partnerWrapper'>
            <div className='partner'>
              <img src={partner.img} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
