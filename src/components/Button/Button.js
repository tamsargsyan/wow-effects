import { NavLink } from "react-router-dom";
import "./style.css";

const Button = ({ link, text, style, className, to }) => {
  if (link)
    return (
      <NavLink style={style} className={className} to={to}>
        {text}
      </NavLink>
    );
  return (
    <button style={style} className={className}>
      {text}
    </button>
  );
};

export default Button;
