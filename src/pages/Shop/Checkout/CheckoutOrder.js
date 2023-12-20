import CardProduct from "../../../components/CardProduct/CardProduct";
import Checkbox from "../../../components/Checkbox/Checkbox";
import CheckoutLayout from "./CheckoutLayout";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import {
  calculateBasketTotalPrice,
  removeFromBasket,
} from "../../../redux/actions/basketActions";
import Slider from "../../../components/Slider/Slider";
import Title from "../../../components/Title/Title";
import { orders } from "../../Account/Orders/Orders";
import Product from "../../../components/Product/Product";
import Button from "../../../components/Button/Button";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { STORAGE_URL } from "../../../services/apiService";
import { removeHtmlTags } from "../../../Helpers/removeHtmlTags";
import Cookies from "js-cookie";

const CheckoutOrder = () => {
  const lang = Cookies.get("i18next") || "en";
  const basketItems = useSelector(state => state.basket.items);
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const [showArrowBtns, setShowArrowBtns] = useState(false);

  useEffect(() => {
    const sliderContainer = document.querySelector(".slider ");
    const items = document.querySelectorAll(".productSliderItem");
    const gap = 32;
    let totalWidth = 0;
    if (sliderContainer && items) {
      items.forEach(img => {
        //@ts-ignore
        totalWidth += img.offsetWidth + gap;
      });
      //@ts-ignore
      setShowArrowBtns(totalWidth > sliderContainer.offsetWidth);
    }
  }, [width]);

  useEffect(() => {
    basketItems && dispatch(calculateBasketTotalPrice());
  }, [basketItems]);

  const basketTotalPrice = useSelector(state => state.basket.totalItemsPrice);
  const delivery = 10;

  return (
    <CheckoutLayout>
      <div className='checkoutCardContainer container'>
        <div style={{ width: "60%" }}>
          <div className='checkoutCardTitleContainer'>
            <p className='checkoutCardTitle'>Cart</p>
          </div>
          <div className='checkoutCard'>
            <div className='checkoutCardCheckboxContainer'>
              <Checkbox
                text='Select all'
                uniqueId={"checkoutOrder_selectAll"}
              />
            </div>
            <div className='checkoutCards'>
              {basketItems.map((item, i) => (
                <Fragment key={i}>
                  <CardProduct
                    title={item[`title_${lang}`]}
                    description={removeHtmlTags(item[`description_${lang}`])}
                    img={`${STORAGE_URL}/${item.image}`}
                    id={item.id}
                    onRemove={() => dispatch(removeFromBasket(item.id))}
                    quantity={item.quantity}
                    price={+item.price}
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
              <p className='subtotalDescription'>${basketTotalPrice}</p>
            </div>
            <div className='subtotal'>
              <p className='subtotalTitle'>Delivery</p>
              <p className='subtotalDescription'>${delivery}</p>
            </div>
          </div>
          <div className='orderSummaryLine'></div>
          <div className='totalContainer'>
            <p className='subtotalTitle'>Total</p>
            <p className='subtotalDescription'>
              ${basketTotalPrice + delivery}
            </p>
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
        <Slider className='portfolioSlider' showArrowBtns={showArrowBtns}>
          {orders.map((order, i) => (
            <div className='productSliderItem' key={i}>
              <Product
                name={order.name}
                price={order.price}
                // pending={order.pending}
                // onBtnClick={() => setViewOrder(true)}
                btnText='Add to cart'
              />
            </div>
          ))}
        </Slider>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutOrder;
