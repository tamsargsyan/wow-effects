import "./style.css";

const PagesTitle = ({ title, description, style }) => {
  return (
    <div className='pagesTitleContainer container' style={style}>
      <p className='pagesTitle'>{title}</p>
      <p className='pagesTitleDescription'>{description}</p>
    </div>
  );
};

export default PagesTitle;
