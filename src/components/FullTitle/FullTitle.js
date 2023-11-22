import Title from "../Title/Title";
import Button from "../Button/Button";
import "./style.css";

const FullTitle = ({ btnStyle, className, title, desc, btnLink }) => {
  return (
    <div className={`${className} fullTitleContainer`}>
      <div className='fullTitle'>
        <Title title={title} />
        <p className='fullTitleDesc'>{desc}</p>
      </div>
      <div className='fullTitleBtn'>
        <Button text='View More' style={btnStyle} link={btnLink} />
      </div>
    </div>
  );
};

export default FullTitle;
