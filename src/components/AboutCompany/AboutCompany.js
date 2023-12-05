import Img from "../Img";
import Title from "../Title/Title";
import "./style.css";

const AboutCompany = ({ title, description, img, btn, bgImg, className }) => {
  return (
    <div className={`${className} aboutCompanyContainer`}>
      {bgImg && <Img src={bgImg} alt='Background' className='aboutCompanyBG' />}
      <div className='aboutCompanyInfo'>
        <Title title={title} className={className ? `${className}Title` : ""} />
        <p className='aboutCompanyDesc'>{description}</p>
        {btn}
      </div>
      {img && (
        <div
          className='aboutCompanyImg'
          style={{ backgroundImage: `url(${img})` }}></div>
      )}
    </div>
  );
};

export default AboutCompany;
