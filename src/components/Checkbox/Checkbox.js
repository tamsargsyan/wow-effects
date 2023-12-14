import "./style.css";

const Checkbox = ({ text, className }) => {
  return (
    <div className='checkboxContainer'>
      <div className='checkbox-wrapper-23'>
        <input type='checkbox' id='check-23' />
        <label htmlFor='check-23'>
          <svg viewBox='0,0,50,50'>
            <path d='M5 30 L 20 45 L 45 5'></path>
          </svg>
        </label>
      </div>
      {text && (
        <label
          className='checkboxTitle'
          // for="check-23"
        >
          {text}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
