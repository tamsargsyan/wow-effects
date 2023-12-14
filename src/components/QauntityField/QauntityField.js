import { useState } from "react";
import "./style.css";

const QauntityField = () => {
  const [value, setValue] = useState(0);
  const limit = 20;

  const increaseValue = () => {
    if (limit && value >= limit) return;
    setValue(prevValue => prevValue + 1);
  };

  const decreaseValue = () => {
    if (value < 1) return;
    setValue(prevValue => prevValue - 1);
  };

  return (
    <div className='quantity-field'>
      <button className='value-button decrease-button' onClick={decreaseValue}>
        -
      </button>
      {/* <div className='number'>{value}</div> */}
      <input
        value={value}
        className='number'
        onChange={e => setValue(Number(e.target.value))}
      />
      <button className='value-button increase-button' onClick={increaseValue}>
        +
      </button>
    </div>
  );
};

export default QauntityField;
