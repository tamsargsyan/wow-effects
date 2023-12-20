import Img from "../Img";
import ARROW from "../../assets/icons/arrow-right-white.svg";
import "./style.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SingleBlogBox = ({
  style,
  size,
  className,
  name,
  description,
  btnText,
  img,
  to,
}) => {
  return (
    <div
      className={`singleBlogBoxContainer_${size} ${className} singleBlogBoxContainer`}
      style={style}>
      <div className='singleBlogBoxImg'>
        <Img src={img} alt='Blog' />
      </div>
      <div className='singleBlogBoxInfoContainer'>
        <div className='singleBlogBoxBtn'>
          <Button text={btnText} />
        </div>
        <div className='singleBlogBoxTitleContainer'>
          <p className='singleBlogBoxTitle'>{name}</p>
          <p className='singleBlogBoxDescription'>{description}</p>
        </div>
        <div className='singleBlogBoxLink'>
          <Link to={to}>
            Read More
            <Img src={ARROW} alt='Arrow' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogBox;
