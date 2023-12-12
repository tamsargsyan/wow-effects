import { Link } from "react-router-dom";
import PagesTitle from "../../components/Title/PagesTitle";
import Filter from "./Filter/Filter";
import Checkbox from "../../components/Checkbox/Checkbox";
import { categories, colors, material, type } from "./data";
import "./style.css";
import { Slider } from "antd";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { animate, initial } from "../../utils/transition";
import Img from "../../components/Img";
import ARROW from "../../assets/icons/arrow-down-white.svg";
import { filterStatus } from "../Portfolio/PortfolioPage";
import SEARCH from "../../assets/icons/search-pink.svg";
import { orders } from "../Account/Orders/Orders";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const Shop = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Sort by");

  const handleDropdownClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = item => {
    setSelectedItem(item);
    setShowMenu(false);
  };

  return (
    <motion.div initial={initial} animate={animate} className='shopContainer'>
      <PagesTitle title='Our Shop' />
      <div className='shopmart container'>
        <div className='filteringSection'>
          <p className='filteringSectionTitle'>Filters</p>
          <Filter title='Categories'>
            {categories.map((ctg, i) => (
              <Link className='filteringOption filteringOptionCategory' key={i}>
                <p>{ctg.title}</p>
              </Link>
            ))}
          </Filter>
          <div className='filteringSectionDividor'></div>
          <Filter title='Type'>
            {type.map((tp, i) => (
              // <Link className='filteringOption' key={i}>
              <Fragment key={i}>
                <Checkbox text={tp.title} />
              </Fragment>
              // </Link>
            ))}
          </Filter>
          <div className='filteringSectionDividor'></div>
          <Filter title='Material'>
            {material.map((mat, i) => (
              // <Link className='filteringOption filteringOptionCategory' key={i}>
              //   <p>{ctg.title}</p>
              // </Link>
              <Fragment key={i}>
                <Checkbox text={mat.title} />
              </Fragment>
            ))}
          </Filter>
          <div className='filteringSectionDividor'></div>
          <Filter title='Price'>
            {/* <RangeSlider /> */}
            <Slider
              range
              defaultValue={[20, 50]}
              style={{ color: "#AF4B85" }}
              track={{ color: "#AF4B85" }}
            />
          </Filter>
          <div className='filteringSectionDividor'></div>
          <Filter title='Color'>
            {colors.map(({ color }, i) => (
              <Link className='filteringOption' key={i}>
                <div
                  className='filteringOptionColor'
                  style={{ background: color }}></div>
              </Link>
            ))}
          </Filter>
          <div className='filteringSectionDividor'></div>
        </div>
        <div className='productShowcaseContainer'>
          <div className='searchPanelContainer'>
            <div className='searchPanel'>
              <input type='text' placeholder='Search' />
              <Img src={SEARCH} alt='Search' />
            </div>
            <div className='filterDropHolder' onClick={handleDropdownClick}>
              <div className='filterDropdown'>
                <p>{selectedItem}</p>
                <Img src={ARROW} alt='Arrow' />
              </div>
              <ul className={`${showMenu && "showMenu"} filterMenu`}>
                {filterStatus.map(st => (
                  <li key={st.id} onClick={() => handleMenuItemClick(st.name)}>
                    {st.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='productShowcase'>
            {orders.map((order, i) => (
              <Fragment key={i}>
                <Product
                  name={order.name}
                  price={order.price}
                  // pending={order.pending}
                  // onBtnClick={() => setViewOrder(true)}
                />
              </Fragment>
            ))}
            <Button
              className='seeMoreBtn'
              text='See More'
              link={false}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 0.60)",
                marginTop: "48px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Shop;
