import React from "react";

const ReasonBox = ({ icon, title, description }) => {
  return (
    <div className='reasonBoxWrapper'>
      <img src={icon} className='reasonBoxIcon' alt='Reason' />
      <p className='reasonBoxTitle'>{title}</p>
      <p className='reasonBoxDescription'>{description}</p>
    </div>
  );
};

export default ReasonBox;
