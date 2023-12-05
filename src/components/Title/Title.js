import "./style.css";

const Title = ({ title, className }) => {
  return <p className={`${className} containerTitle`}>{title}</p>;
};

export default Title;
