import { useEffect } from "react";
import CLOSE from "../../assets/icons/close-white.svg";
import Img from "../Img";
import "./style.css";

const Modal = ({ open, onClose, children, title }) => {
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <div className={`${open && "overlayOpen"} overlay`} onClick={onClose}>
      <div className='modalWrapper'>
        <div className='modal' onClick={e => e.stopPropagation()}>
          <div className='modalHeader'>
            <p className='modalHeaderTitle'>{title}</p>
            <button className='modalCloseBtn' onClick={onClose}>
              <Img src={CLOSE} alt='Close' />
            </button>
          </div>
          <div className='modalBody'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
