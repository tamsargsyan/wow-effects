import IMG from "../../assets/ui-fake-images/portfolio-page-1.jpg";
import HEART from "../../assets/icons/heart-gray.svg";
import "./style.css";
import Button from "../Button/Button";

const Product = ({ name, price, pending, onBtnClick }) => {
  const checkPending = () => {
    let result = "";
    if (pending === "in_progress") return (result = "In Progress");
    if (pending === "ordered") return (result = "Ordered");
  };

  return (
    <div className='productWrapper'>
      <div className='productImg' style={{ backgroundImage: `url(${IMG})` }}>
        <button className='productSaveBtn'>
          <img src={HEART} alt='Heart' />
        </button>
      </div>
      <div className='productDetails'>
        <div className={`${pending} productPending`}>
          <p className='productPendingTitle'>{checkPending()}</p>
        </div>
        <div className='productInfo'>
          <div className='productGuide'>
            <p className='productGuideTitle'>{name}</p>
            <p className='productGuidePrice'>${price}</p>
          </div>
          <Button
            text='Manage'
            onClick={onBtnClick}
            className='productRegulatorBtn'
            style={{
              background: "var(--main-color-pink)",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
              border: "none",
              color: "var(--secondary-color-white)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
