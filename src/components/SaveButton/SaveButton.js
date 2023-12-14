import HEART from "../../assets/icons/heart-gray.svg";
import "./style.css";

const SaveButton = () => {
  return (
    <button className='productSaveBtn'>
      <img src={HEART} alt='Heart' />
    </button>
  );
};

export default SaveButton;
