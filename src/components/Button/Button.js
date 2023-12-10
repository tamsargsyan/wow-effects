import { NavLink } from "react-router-dom";
import "./style.css";

const Button = ({
  link,
  text,
  style,
  className,
  to,
  btnType,
  icon,
  alt,
  onClick,
}) => {
  if (link)
    return (
      <NavLink
        style={style}
        className={`${className} mainBtn`}
        to={to}
        onClick={onClick}>
        {text}
      </NavLink>
    );
  return (
    <button
      type={btnType}
      style={style}
      className={`${className} mainBtn`}
      onClick={onClick}>
      {icon && alt && <img src={icon} alt={alt} />}
      {text}
    </button>
  );
};

export default Button;
