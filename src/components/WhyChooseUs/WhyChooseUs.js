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
import { useTranslation } from "react-i18next";

const WhyChooseUs = ({ why_choose_us }) => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";

  return (
    <div className='whyChooseUsContainer container'>
      <p className='whyChooseUsTitle'>{t("why_choose_us")}</p>
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
