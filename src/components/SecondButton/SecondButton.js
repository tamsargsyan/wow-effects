import { useState } from "react";
import ARROW_FALL_PINK from "../../assets/icons/arrow-fall-white.svg";
import ARROW_FALL_WHITE from "../../assets/icons/arrow-fall-pink.svg";
import { NavLink } from "react-router-dom";
import "./style.css";

const SecondButton = ({ className }) => {
  const [linkHover, setLinkHover] = useState(false);
  return (
    <div
      className={`${className} moreBtn`}
      onMouseEnter={() => setLinkHover(true)}
      onMouseLeave={() => setLinkHover(false)}>
      <NavLink className='mainUIGoShoppingMoreLink'>
        <img src={linkHover ? ARROW_FALL_PINK : ARROW_FALL_WHITE} alt='Arrow' />
      </NavLink>
    </div>
  );
};

export default SecondButton;
