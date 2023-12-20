import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/actions/basketActions";

const QauntityField = ({ quantity, id }) => {
  // const [value, setValue] = useState(quantity);
  // const limit = 2000;

  // const increaseValue = () => {
  //   if (limit && value >= limit) return;
  //   setValue(prevValue => prevValue + 1);
  // };

  // const decreaseValue = () => {
  //   if (value < 1) return;
  //   setValue(prevValue => prevValue - 1);
  // };

  const dispatch = useDispatch();

  return (
    <div className='quantity-field'>
      <button
        className='value-button decrease-button'
        onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </button>
      {/* <div className='number'>{value}</div> */}
      <input
        value={quantity}
        className='number'
        readOnly
        // onChange={e => setValue(Number(e.target.value))}
      />
      <button
        className='value-button increase-button'
        onClick={() => dispatch(increaseQuantity(id))}>
        +
      </button>
    </div>
  );
};

export default QauntityField;
