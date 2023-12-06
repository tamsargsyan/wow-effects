import Title from "../Title/Title";
import Button from "../Button/Button";
import "./style.css";

const FullTitle = ({
  btnStyle,
  className,
  title,
  desc,
  btnLink,
  withoutBtn,
  to,
}) => {
  return (
    <div
      className={`${className} ${
        withoutBtn && "fullTitleContainerWithoutBtn"
      } fullTitleContainer`}>
      <div className='fullTitle'>
        <Title title={title} />
        <p className='fullTitleDesc'>{desc}</p>
      </div>
      {!withoutBtn && (
        <div className='fullTitleBtn'>
          <Button text='View More' style={btnStyle} link={btnLink} to={to} />
        </div>
      )}
    </div>
  );
};

export default FullTitle;
