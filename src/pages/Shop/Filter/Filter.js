import { useState } from "react";
import "./style.css";

const Filter = ({ title, children }) => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div
      className={`${
        openFilter && "filterOptionsContainerActive"
      } filterOptionsContainer`}>
      <div
        className='filteringOptionsTitleContainer'
        onClick={() => setOpenFilter(!openFilter)}>
        <p className='filterOptionsTitle'>{title}</p>
        <p className='filteringOptionsMinusPlus'>
          <span></span>
          <span></span>
        </p>
      </div>
      <div className='filteringOptions'>{children}</div>
    </div>
  );
};

export default Filter;
