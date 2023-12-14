import Checkbox from "../Checkbox/Checkbox";
import Img from "../Img";
import QauntityField from "../QauntityField/QauntityField";
import DELETE from "../../assets/icons/delete-white.svg";
import "./style.css";

const CardProduct = ({ title, description, img, onRemove, className }) => {
  return (
    <div className={`${className} cardProductContainer`}>
      <div className='firstSecondThird'>
        <div className='firstSecond'>
          <div className='first'>
            <Checkbox />
          </div>
          <div className='second'>
            <Img src={img} alt='Chair' />
          </div>
        </div>
        <div className='third'>
          <div className='thirdTitleContainer'>
            <p className='cardProductTitle'>{title}</p>
            <p className='cardProductDescription'>{description}</p>
          </div>
          <div className='btns'>
            <QauntityField />
            {className !== "checkoutCardProductContainer" ? (
              <button className='cardProductDeleteBtn' onClick={onRemove}>
                <Img src={DELETE} alt='Delete' />
              </button>
            ) : (
              <p className='cardProductPrice'>$140</p>
            )}
          </div>
        </div>
      </div>
      <div className='forth'>
        {className !== "checkoutCardProductContainer" ? (
          <p className='cardProductPrice'>$140</p>
        ) : (
          <button className='cardProductDeleteBtn' onClick={onRemove}>
            <Img src={DELETE} alt='Delete' />
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
