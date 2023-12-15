import { useState } from "react";
import ARROW_FALL_PINK from "../../assets/icons/arrow-fall-white.svg";
import ARROW_FALL_WHITE from "../../assets/icons/arrow-fall-pink.svg";
import { Link } from "react-router-dom";
import "./style.css";

const SecondButton = ({ className, to, target }) => {
  const [linkHover, setLinkHover] = useState(false);
  return (
    <div
      className={`${className} moreBtn`}
      onMouseEnter={() => setLinkHover(true)}
      onMouseLeave={() => setLinkHover(false)}>
      <Link className='mainUIGoShoppingMoreLink' to={to} target={target}>
        <img src={linkHover ? ARROW_FALL_PINK : ARROW_FALL_WHITE} alt='Arrow' />
      </Link>
    </div>
  );
};

export default SecondButton;
