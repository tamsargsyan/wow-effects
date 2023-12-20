// import RULER from "../../assets/icons/ruler-pink.svg";
// import PEN from "../../assets/icons/pen-pink.svg";
// import RENOVATION from "../../assets/icons/renovation-pink.svg";
// import PRODUCT_CHAIR from "../../assets/icons/product-chair-pink.svg";
import { Fragment } from "react";
import ReasonBox from "./ReasonBox";
import "./style.css";
import { STORAGE_URL } from "../../services/apiService";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import Cookies from "js-cookie";

const WhyChooseUs = ({ why_choose_us }) => {
  // const reasons = [
  //   {
  //     id: 1,
  //     icon: RULER,
  //     title: "Space Planning",
  //     description:
  //       "Interior design agencies help clients to plan and organize their indoor spaces by optimizing the layout and flow of the area.",
  //   },
  //   {
  //     id: 2,
  //     icon: PEN,
  //     title: "Concept Development",
  //     description:
  //       "Interior designers work with clients to create aconcept for the space, taking into account the client’s preferences, functional requirements, and budget.",
  //   },
  //   {
  //     id: 3,
  //     icon: RENOVATION,
  //     title: "Renovation and Remodeling",
  //     description:
  //       "Interior design agencies can also provide renovation and remodeling services to help clients transform their space according to their design preferences.",
  //   },
  //   {
  //     id: 4,
  //     icon: PRODUCT_CHAIR,
  //     title: "A wide range of products",
  //     description:
  //       "You can find what you are looking for with us. We have a wide range for different styles. With us you can create the house of your dreams.",
  //   },
  // ];

  const lang = Cookies.get("i18next") || "en";

  return (
    <div className='whyChooseUsContainer container'>
      <p className='whyChooseUsTitle'>Why choose us</p>
      <div className='whyChooseUsReasons'>
        {why_choose_us.map(r => (
          <Fragment key={r.id}>
            <ReasonBox
              icon={`${STORAGE_URL}/${r.logo}`}
              title={r[`title_${lang}`]}
              description={removeHtmlTags(r[`description_${lang}`])}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
