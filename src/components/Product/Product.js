import "./style.css";
import Button from "../Button/Button";
import SaveButton from "../SaveButton/SaveButton";

const Product = ({
  name,
  price,
  pending,
  onBtnClick,
  btnText,
  img,
  heartit,
  id,
}) => {
  const checkPending = () => {
    let result = "";
    if (pending === "in_progress") return (result = "In Progress");
    if (pending === "ordered") return (result = "Ordered");

    return result;
  };
  const favoriteProjects = JSON.parse(
    localStorage.getItem("favoriteProjects") || "[]"
  );

  return (
    <div className='productWrapper'>
      <div className='productImg' style={{ backgroundImage: `url(${img})` }}>
        <SaveButton onClick={heartit} isSaved={favoriteProjects.includes(id)} />
      </div>
      <div className='productDetails'>
        {pending && (
          <div className={`${pending} productPending`}>
            <p className='productPendingTitle'>{checkPending()}</p>
          </div>
        )}
        <div className='productInfo'>
          <div className='productGuide'>
            <p className='productGuideTitle'>{name}</p>
            <p className='productGuidePrice'>${price}</p>
          </div>
          <Button
            text={btnText}
            onClick={onBtnClick}
            className='productRegulatorBtn'
            style={{
              background: "var(--main-color-pink)",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
              border: "none",
              color: "var(--secondary-color-white)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
