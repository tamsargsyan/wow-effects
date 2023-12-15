import SecondButton from "../SecondButton/SecondButton";
import "./style.css";

const PortfolioBox = ({ className, img, name, description, to }) => {
  return (
    <div
      className={`${className} portfolioBox`}
      style={{ backgroundImage: `url(${img})` }}>
      <div className='portfolioBoxInfo'>
        <div className='portfolioBoxTitleWrapper'>
          <p className='portfolioBoxTitle'>{name}</p>
          <p className='portfolioBoxDesc'>{description}</p>
        </div>
        <SecondButton className='moreBtnLarge portfolioWorkMoreBtn' to={to} />
      </div>
    </div>
  );
};

export default PortfolioBox;
