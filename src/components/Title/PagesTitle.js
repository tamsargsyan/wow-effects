import "./style.css";

const PagesTitle = ({ title, description }) => {
  return (
    <div className='pagesTitleContainer container'>
      <p className='pagesTitle'>{title}</p>
      <p className='pagesTitleDescription'>{description}</p>
    </div>
  );
};

export default PagesTitle;
