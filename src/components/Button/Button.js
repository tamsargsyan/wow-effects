import { NavLink } from "react-router-dom";
import "./style.css";

const Button = ({ link, text, style, className, to, btnType }) => {
  if (link)
    return (
      <NavLink style={style} className={`${className} mainBtn`} to={to}>
        {text}
      </NavLink>
    );
  return (
    <button type={btnType} style={style} className={`${className} mainBtn`}>
      {text}
    </button>
  );
};

export default Button;
