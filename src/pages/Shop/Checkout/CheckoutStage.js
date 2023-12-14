import { NavLink } from "react-router-dom";
import ARROW from "../../../assets/icons/arrow-right-white.svg";
import Img from "../../../components/Img";

const CheckoutStage = () => {
  const stages = [
    {
      id: 1,
      title: "Cart",
      to: "/checkout/order",
    },
    {
      id: 2,
      title: "Place Order",
      to: "/checkout/place-order",
    },
    {
      id: 3,
      title: "Order Complete",
      to: "/checkout/order-complete",
    },
  ];

  return (
    <div className='checkoutStageContainer'>
      {stages.map((stage, i) => (
        <div className='checkoutStageContainer' key={i + stage.title}>
          <NavLink
            end
            to={stage.to}
            className='checkoutStageLink'
            onClick={e => e.preventDefault()}>
            {stage.title}
          </NavLink>
          <div className='checkoutStageArrow'>
            <Img src={ARROW} alt='Arrow' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutStage;
