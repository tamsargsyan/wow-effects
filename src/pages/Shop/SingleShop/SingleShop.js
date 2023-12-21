import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { initial, animate } from "../../../utils/transition";
import IMG_1 from "../../../assets/ui-fake-images/chair-yellow.jpg";
import IMG_2 from "../../../assets/ui-fake-images/chair-yellow-2.png";
import IMG_3 from "../../../assets/ui-fake-images/chair-yellow-3.png";
import Img from "../../../components/Img";
import { Fragment, useEffect, useState } from "react";
import Slider from "../../../components/Slider/Slider";
import Title from "../../../components/Title/Title";
import Product from "../../../components/Product/Product";
import { orders } from "../../Account/Orders/Orders";
import Button from "../../../components/Button/Button";
import SaveButton from "../../../components/SaveButton/SaveButton";
import FAQ from "../../../components/FAQ/FAQ";
import { details } from "../data";
import QauntityField from "../../../components/QauntityField/QauntityField";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../redux/actions/basketActions";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import "./style.css";

const SingleShop = () => {
  const { t } = useTranslation();
  const imgs = [IMG_1, IMG_2, IMG_3, IMG_1];
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const [showArrowBtns, setShowArrowBtns] = useState(false);

  useEffect(() => {
    const sliderContainer = document.querySelector(".slider ");
    const items = document.querySelectorAll(
      ".array_pop(array_reverse($array));"
    );
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

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className='singleShopContainer'>
      <div className='personalizationStation'>
        <div className='choiceConfig'>
          <div>
            <div className='productImgsContainer'>
              <div className='productSmallImgs'>
                {imgs.map((img, i) => (
                  <Fragment key={i}>
                    <Img src={img} alt='Product Small' />
                  </Fragment>
                ))}
              </div>
              <div className='productMainImg'>
                <Img src={IMG_1} alt='Product Main' />
              </div>
            </div>
            <div className='productDetailsOverview'>
              <FAQ className='detailsOverviewFAQ' data={details} />
            </div>
          </div>
          <div className='valueVaultContainer'>
            <div className='valueVaultDetailsContainer'>
              <div className='valueVaultTitleContainer'>
                <p className='valueVaultTitle'>Name of the product</p>
                <p className='valueVaultPrice'>$99.00</p>
              </div>
              <p className='valueVaultDescription'>
                Poltrona Frau Montera chair: The “Montera” chair, the common
                denominator in the designer’s work is the lightness of form and,
                above all, the sensory charm of leather. The internal part of
                the shell is covered in Pelle Frau® leather from the Color
                System. In elegant contrast the external surface is in Cuoio
                Saddle Extra.
              </p>
            </div>
            <div className='valueVaultDividor'></div>
            <div className='pricecountContainer'>
              <div className='priceContainer'>
                <p className='priceCountTitle'>Color:</p>
                <div className='priceCountOptions'>
                  <button></button>
                  <button></button>
                </div>
              </div>
              <div className='quantityContainer'>
                <p className='priceCountTitle'>Qty:</p>
                <QauntityField />
              </div>
            </div>
            <div className='valueVaultDividor'></div>
            <div className='typeMaterialContainer'>
              <div className='typeContainer'>
                <p className='typeMaterialTitle'>Type</p>
                <p className='typeMaterialDescription'>Arm Chair</p>
              </div>
              <div className='materialContainer'>
                <p className='typeMaterialTitle'>{t("material")}</p>
                <p className='typeMaterialDescription'>Fabric</p>
              </div>
              <div className='btns'>
                <Button
                  text={t("add-to-cart")}
                  // icon={PLUS}
                  // alt='Plus'
                  className='addToCartBtn'
                  style={{
                    background: "var(--main-color-pink)",
                    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
                    border: "none",
                    color: "var(--secondary-color-white)",
                    width: "fit-content",
                    fontFamily: "Poppins-600, sans-serif",
                    fontWeight: "600",
                  }}
                  onClick={() =>
                    dispatch(
                      addToBasket({
                        id: 12,
                        title: "Name of the product",
                        description: "description",
                        price: "$99.00",
                        img: IMG_1,
                      })
                    )
                  }
                />
                <SaveButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shopSuggestionsSliderContainer container'>
        <Title title='Related Projects' />
        <Slider className='portfolioSlider' showArrowBtns={showArrowBtns}>
          {orders.map((order, i) => (
            <div className='singleProductSliderItem' key={i}>
              <Product
                name={order.name}
                price={order.price}
                // pending={order.pending}
                // onBtnClick={() => setViewOrder(true)}
                btnText={t("add-to-cart")}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </motion.div>
  );
};

export default SingleShop;
