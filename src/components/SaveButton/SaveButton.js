import HEART from "../../assets/icons/heart-gray.svg";
import HEART_FILL from "../../assets/icons/heart-pink.svg";
import "./style.css";

const SaveButton = ({ onClick, isSaved }) => {
  return (
    <button
      className={`${isSaved && "productSaveBtnTrue"} productSaveBtn`}
      onClick={onClick}>
      <img src={HEART} alt='Heart' className='notSavedImg' />
      <img src={HEART_FILL} alt='Heart Filled' className='savedImg' />
    </button>
  );
};

export default SaveButton;
