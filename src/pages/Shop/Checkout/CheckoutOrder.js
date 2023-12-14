import CardProduct from "../../../components/CardProduct/CardProduct";
import Checkbox from "../../../components/Checkbox/Checkbox";
import CheckoutLayout from "./CheckoutLayout";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { removeFromBasket } from "../../../redux/actions/basketActions";
import Slider from "../../../components/Slider/Slider";
import Title from "../../../components/Title/Title";
import { orders } from "../../Account/Orders/Orders";
import Product from "../../../components/Product/Product";
import Button from "../../../components/Button/Button";

const CheckoutOrder = () => {
  const basketItems = useSelector(state => state.basket.items);
  const dispatch = useDispatch();

  return (
    <CheckoutLayout>
      <div className='checkoutCardContainer container'>
        <div style={{ width: "60%" }}>
          <div className='checkoutCardTitleContainer'>
            <p className='checkoutCardTitle'>Cart</p>
          </div>
          <div className='checkoutCard'>
            <div className='checkoutCardCheckboxContainer'>
              <Checkbox text='Select all' />
            </div>
            <div className='checkoutCards'>
              {basketItems.map((item, i) => (
                <Fragment key={i}>
                  <CardProduct
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    id={item.id}
                    className='checkoutCardProductContainer'
                    onRemove={() => dispatch(removeFromBasket(item.id))}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className='orderSummaryContainer'>
          <div className='orderSummaryTitleContainer'>
            <p className='orderSummaryTitle'>Order Summary</p>
          </div>
          <div className='orderSubtotalContainer'>
            <div className='subtotal'>
              <p className='subtotalTitle'>Subtotal</p>
              <p className='subtotalDescription'>$560</p>
            </div>
            <div className='subtotal'>
              <p className='subtotalTitle'>Delivery</p>
              <p className='subtotalDescription'>$10</p>
            </div>
          </div>
          <div className='orderSummaryLine'></div>
          <div className='totalContainer'>
            <p className='subtotalTitle'>Total</p>
            <p className='subtotalDescription'>$560</p>
          </div>
          <Button
            text='Continue'
            // icon={PLUS}
            // alt='Plus'
            link={true}
            to='/checkout/place-order'
            className='checkoutContinueBtn'
            style={{
              background: "var(--main-color-pink)",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
              border: "none",
              color: "var(--secondary-color-white)",
              fontFamily: "Poppins-600",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            }}
          />
        </div>
      </div>
      <div className='shopSuggestionsSliderContainer container'>
        <Title title='Related Projects' />
        <Slider className='portfolioSlider'>
          {orders.map((order, i) => (
            <Fragment key={i}>
              <Product
                name={order.name}
                price={order.price}
                // pending={order.pending}
                // onBtnClick={() => setViewOrder(true)}
                btnText='Add to cart'
              />
            </Fragment>
          ))}
        </Slider>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutOrder;
