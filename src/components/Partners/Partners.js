import Slider from "../Slider/Slider";
import Title from "../Title/Title";
// import PARTNER_1 from "../../assets/partners/partner-1.svg";
import "./style.css";
import Img from "../Img";
import { STORAGE_URL } from "../../services/apiService";

const Partners = () => {
  // const partners = [
  //   {
  //     id: 1,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  //   {
  //     id: 2,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  //   {
  //     id: 3,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  //   {
  //     id: 4,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  //   {
  //     id: 5,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  //   {
  //     id: 6,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  //   {
  //     id: 7,
  //     img: PARTNER_1,
  //     name: "Lorem Ipsum",
  //   },
  // ];
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  const lang = "en";

  const partners2 = {
    partners: [
      {
        id: 2,
        logo: "/images/partners/20231213102949.png",
        link: "jncxjnx",
        logo_title_en: "dgbd",
        logo_title_ru: "sgretr",
        logo_title_am: "sgb",
      },
    ],
  };

  return (
    <div className='partnersContainer container'>
      <Title title='Our partners' />
      <Slider className='partnersSlider'>
        {partners2.partners.map(partner => (
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
