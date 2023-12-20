import { useState } from "react";
import ARROW_FALL_PINK from "../../assets/icons/arrow-fall-white.svg";
import ARROW_FALL_WHITE from "../../assets/icons/arrow-fall-pink.svg";
import { Link } from "react-router-dom";
import "./style.css";
import Cookies from "js-cookie";

const SecondButton = ({ className, to, target }) => {
  const [linkHover, setLinkHover] = useState(false);
  const lang = Cookies.get("i18next");

  return (
    <div
      className={`${className} moreBtn`}
      onMouseEnter={() => setLinkHover(true)}
      onMouseLeave={() => setLinkHover(false)}>
      <Link
        className='mainUIGoShoppingMoreLink'
        to={`/${lang}${to}`}
        target={target}>
        <img src={linkHover ? ARROW_FALL_PINK : ARROW_FALL_WHITE} alt='Arrow' />
      </Link>
    </div>
  );
};

export default SecondButton;
