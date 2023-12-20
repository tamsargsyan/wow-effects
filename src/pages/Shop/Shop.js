import { Link } from "react-router-dom";
import PagesTitle from "../../components/Title/PagesTitle";
import Filter from "./Filter/Filter";
import Checkbox from "../../components/Checkbox/Checkbox";
import { categories, colors, material, type } from "./data";
import "./style.css";
import { Slider } from "antd";
import { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/actions/basketActions";
import { useWindowSize } from "../../hooks/useWindowSize";
import FILTER from "../../assets/icons/filter-white.svg";
import Modal from "../../components/Modal/Modal";
import { fetchShop } from "../../redux/actions/shopActions";
import Spinner from "../../components/Spinner/Spinner";
import apiService, { STORAGE_URL } from "../../services/apiService";

const Shop = () => {
  const lang = "en";
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Sort by");

  const handleDropdownClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = item => {
    setSelectedItem(item);
    setShowMenu(false);
  };

  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const [openFilters, setOpenFilters] = useState(false);

  const [favoriteProjects, setFavoriteProjects] = useState(
    JSON.parse(localStorage.getItem("favoriteProjects") || "[]")
  );
  const { isAuthenticated } = useSelector(state => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [addToFavoritesLoading, setAddToFavoritesLoading] = useState(false);
  const [addToFavoritesError, setAddToFavoritesError] = useState(null);
  const [addToFavoritesResponseData, setAddToFavoritesResponseData] =
    useState(null);

  const addToFavorites = async values => {
    setAddToFavoritesLoading(true);
    setAddToFavoritesError(null);

    await apiService.post(
      "addToFavorites",
      values,
      {
        Authorization: `Bearer ${token}`,
      },
      ({ loading, error, data }) => {
        setAddToFavoritesLoading(loading);
        setAddToFavoritesError(error);

        setAddToFavoritesResponseData(data);
      }
    );
  };

  console.log(addToFavoritesResponseData);

  const heartit = product_id => {
    if (isAuthenticated) {
      addToFavorites({
        user_id: user.id,
        product_id,
      });
    } else {
      const index = favoriteProjects.indexOf(product_id);

      if (index !== -1) {
        favoriteProjects.splice(index, 1);
      } else {
        favoriteProjects.push(product_id);
      }
      localStorage.setItem(
        "favoriteProjects",
        JSON.stringify(favoriteProjects)
      );
      setFavoriteProjects(
        JSON.parse(localStorage.getItem("favoriteProjects") || "[]")
      );
    }
  };

  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  const shop = useSelector(state => state.shop);
  const [porductFilterLoading, setPorductFilterLoading] = useState(false);
  const [porductFilterError, setPorductFilterError] = useState(null);
  const [porductFilterResponseData, setPorductFilterResponseData] =
    useState(null);

  const productFilter = async values => {
    setPorductFilterLoading(true);
    setPorductFilterError(null);

    await apiService.post(
      "productFilter",
      values,
      {},
      ({ loading, error, data }) => {
        setPorductFilterLoading(loading);
        setPorductFilterError(error);
        setPorductFilterResponseData(data);
      }
    );
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const addToCart = async values => {
    setLoading(true);
    setError(null);
    await apiService.post(
      "addToCart",
      values,
      {
        Authorization: `Bearer ${token}`,
      },
      ({ loading, error, data }) => {
        setLoading(loading);
        setError(error);
        if (!error && data && data.token && data.user) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        setResponseData(data);
      }
    );
  };

  const [body, setBody] = useState(null);

  const updateFilter = (key, index, id) => {
    setBody(prevData => {
      const newKey = `${key}[${index}]`;
      const newData = { ...prevData };

      if (newData[newKey] === id) {
        delete newData[newKey];
      } else {
        newData[newKey] = id;
      }

      return newData;
    });
  };

  useEffect(() => {
    body && productFilter(body);
  }, [body]);

  if (shop.shop === null && shop.loading)
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div initial={initial} animate={animate} className='shopContainer'>
      {shop.shop && (
        <>
          <PagesTitle title='Our Shop' />
          <div className='shopmart container'>
            <div className='filteringSection filteringSectionDesktop'>
              <p className='filteringSectionTitle'>Filters</p>
              <Filter title='Categories'>
                {shop.shop.product_categories.map((ctg, i) => {
                  return (
                    <Link
                      className={`${
                        body &&
                        body[`categories[${i}]`] &&
                        "filteringOptionCategoryActive"
                      } filteringOption filteringOptionCategory`}
                      key={i}
                      onClick={() => updateFilter("categories", i, ctg.id)}>
                      <p>{ctg[`title_${lang}`]}</p>
                    </Link>
                  );
                })}
              </Filter>
              <div className='filteringSectionDividor'></div>
              <Filter title='Type'>
                {shop.shop.product_types.map((tp, i) => (
                  // <Link className='filteringOption' key={i}>
                  <div
                    style={{ width: "fit-content" }}
                    key={i}
                    onClick={() => updateFilter("types", i, tp.id)}>
                    <Checkbox
                      text={tp[`title_${lang}`]}
                      uniqueId={tp.title_en + i}
                    />
                  </div>
                  // </Link>
                ))}
              </Filter>
              <div className='filteringSectionDividor'></div>
              <Filter title='Material'>
                {shop.shop.product_materials.map((mat, i) => (
                  // <Link className='filteringOption filteringOptionCategory' key={i}>
                  //   <p>{ctg.title}</p>
                  // </Link>
                  <div
                    key={i}
                    style={{ width: "fit-content" }}
                    onClick={() => updateFilter("materials", i, mat.id)}>
                    <Checkbox
                      text={mat[`title_${lang}`]}
                      uniqueId={mat.title_en + i}
                    />
                  </div>
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
                {width > 900 ? (
                  <div
                    className='filterDropHolder'
                    onClick={handleDropdownClick}>
                    <div className='filterDropdown'>
                      <p>{selectedItem}</p>
                      <Img src={ARROW} alt='Arrow' />
                    </div>
                    <ul className={`${showMenu && "showMenu"} filterMenu`}>
                      {filterStatus.map(st => (
                        <li
                          key={st.id}
                          onClick={() => handleMenuItemClick(st.name)}>
                          {st.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <button
                    className='mobileFilterBtn'
                    onClick={() => setOpenFilters(true)}>
                    <Img src={FILTER} alt='Filter' />
                  </button>
                )}
              </div>
              <div className='productShowcase'>
                {porductFilterLoading ? (
                  <div className='productShowcaseContainerLoading'>
                    <Spinner />
                  </div>
                ) : (
                  <>
                    {(porductFilterResponseData
                      ? porductFilterResponseData.products
                      : shop.shop.products
                    ).map((order, i) => (
                      <Fragment key={i}>
                        <Product
                          name={order[`title_${lang}`]}
                          price={order.price}
                          // pending={order.pending}
                          onBtnClick={() => {
                            isAuthenticated
                              ? addToCart({
                                  user_id: user.id,
                                  product_id: order.id,
                                  product_count: 1,
                                })
                              : dispatch(addToBasket(order));
                          }}
                          heartit={() => heartit(order.id)}
                          btnText='Add to cart'
                          img={`${STORAGE_URL}/${order.image}`}
                          id={order.id}
                        />
                      </Fragment>
                    ))}
                    {/* <Button
                  className='seeMoreBtn'
                  text='See More'
                  link={false}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "rgba(255, 255, 255, 0.60)",
                    marginTop: "48px",
                    width: "100%",
                  }}
                /> */}
                  </>
                )}
              </div>
            </div>
          </div>
          <Footer />
          {width < 900 && (
            <Modal
              title='Filters'
              open={openFilters}
              onClose={() => setOpenFilters(false)}>
              <div className='filteringSection'>
                <div className='filterDropHolder' onClick={handleDropdownClick}>
                  <div className='filterDropdown'>
                    <p>{selectedItem}</p>
                    <Img src={ARROW} alt='Arrow' />
                  </div>
                  <ul className={`${showMenu && "showMenu"} filterMenu`}>
                    {filterStatus.map(st => (
                      <li
                        key={st.id}
                        onClick={() => handleMenuItemClick(st.name)}>
                        {st.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className='filteringSectionTitle'>Filters</p>
                <Filter title='Categories'>
                  {shop.shop.product_categories.map((ctg, i) => (
                    <Link
                      className='filteringOption filteringOptionCategory'
                      key={i}>
                      <p>{ctg[`title_${lang}`]}</p>
                    </Link>
                  ))}
                </Filter>
                <div className='filteringSectionDividor'></div>
                <Filter title='Type'>
                  {shop.shop.product_types.map((tp, i) => (
                    // <Link className='filteringOption' key={i}>
                    <Fragment key={i}>
                      <Checkbox text={tp[`title_${lang}`]} />
                    </Fragment>
                    // </Link>
                  ))}
                </Filter>
                <div className='filteringSectionDividor'></div>
                <Filter title='Material'>
                  {shop.shop.product_materials.map((mat, i) => (
                    // <Link className='filteringOption filteringOptionCategory' key={i}>
                    //   <p>{ctg.title}</p>
                    // </Link>
                    <Fragment key={i}>
                      <Checkbox text={mat[`title_${lang}`]} />
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
            </Modal>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Shop;
