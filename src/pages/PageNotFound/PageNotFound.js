import IMG_404 from "../../assets/not-found-404.svg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Img from "../../components/Img";
import { motion } from "framer-motion";
import { initial, animate } from "../../utils/transition";
import "./style.css";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const PageNotFound = () => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";

  return (
    <motion.div initial={initial} animate={animate}>
      <div className='pageNotFoundContainer'>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          className='img404'>
          <Img src={IMG_404} alt='404' />
        </motion.div>
        <div className='pageNotFoundTitleContainer'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className='pageNotFoundTitle'>{t("oops")}</p>
          </motion.div>
          <p className='pageNotFoundDescription'>{t("page_not_found_desc")}</p>
          <Button
            text={t("go_home")}
            className='pageNotFoundBtn'
            style={{
              background: "var(--main-color-pink)",
              color: "var(--secondary-color-white)",
              border: "none",
              display: "block",
              textAlign: "center",
              textDecoration: "none",
            }}
            link={true}
            to={`/${lang}/`}
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PageNotFound;
