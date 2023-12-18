import { Link } from "react-router-dom";
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
  target,
}) => {
  if (link)
    return (
      <Link
        style={style}
        className={`${className} mainBtn`}
        to={to}
        onClick={onClick}
        target={target}>
        {text}
      </Link>
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
