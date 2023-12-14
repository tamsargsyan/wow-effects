import Img from "../Img";
import CLOSE from "../../assets/icons/close-white.svg";
import "./style.css";
import { Fragment, useEffect } from "react";
import Checkbox from "../Checkbox/Checkbox";
import CardProduct from "../CardProduct/CardProduct";
import Button from "../Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { animate, initial } from "../../utils/transition";
import {
  closeBasketModal,
  removeFromBasket,
} from "../../redux/actions/basketActions";

const Basket = () => {
  const dispatch = useDispatch();
  const basketModal = useSelector(state => state.basket.basketModal);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", basketModal);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [basketModal]);

  const basketItems = useSelector(state => state.basket.items);

  return (
    <AnimatePresence>
      {basketModal && (
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3 }}
          className='basketOverlay'
          onClick={() => dispatch(closeBasketModal())}>
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100vw" }}
            transition={{ duration: 0.3 }}
            className='basketContainer'
            onClick={e => e.stopPropagation()}>
            <div className='basketHeader'>
              <p className='basketHeaderTitle'>Cart</p>
              <button
                className='basketHeaderClose'
                onClick={() => dispatch(closeBasketModal())}>
                <Img src={CLOSE} alt='Close' />
              </button>
            </div>
            <div className='basketBody'>
              <Checkbox text='Select all' />
              <div className='basketProducts'>
                {basketItems.map((item, i) => (
                  <Fragment key={i}>
                    <CardProduct
                      title={item.title}
                      description={item.description}
                      img={item.img}
                      id={item.id}
                      onRemove={() => dispatch(removeFromBasket(item.id))}
                    />
                  </Fragment>
                ))}
              </div>
              <div className='basketSubtotalPriceContainer'>
                <p className='basketSubtotalPrice'>$560</p>
              </div>
            </div>
            <div className='basketContinueCheckoutBtn'>
              <Button
                text='Continue to Checkout'
                style={{
                  borderRadius: "4px",
                  background: "var(--main-color-pink)",
                  color: "var(--secondary-color-white)",
                  border: "none",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                }}
                link={true}
                onClick={() => dispatch(closeBasketModal())}
                to='/checkout/order'
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Basket;
