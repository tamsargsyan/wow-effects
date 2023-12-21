import Button from "../Button/Button";
import FullTitle from "../FullTitle/FullTitle";
import "./style.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";
import { Fragment, useState } from "react";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/actions/basketActions";
import apiService, { STORAGE_URL } from "../../services/apiService";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const FurnitureInfos = ({ product_suggestions }) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const lang = Cookies.get("i18next") || "en";

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

  return (
    <div className='furnitureContainer container'>
      {product_suggestions.map((fur, i) => (
        <div className='furnitureInfoContainer' key={i}>
          <FullTitle
            title={fur[`heading_${lang}`]}
            desc={removeHtmlTags(fur[`description_${lang}`])}
            btnLink={true}
            btnStyle={{
              border: "none",
              borderRadius: "8px",
              color: "var(--secondary-color-white)",
              background: "var(--main-color-pink)",
              textDecoration: "none",
              display: "block",
              width: "fit-content",
            }}
            to={fur.link}
          />
          <div className='furnituresWrapper'>
            {fur.products?.map((f, i) => (
              <Fragment key={i}>
                <Product
                  name={f[`title_${lang}`]}
                  price={f.price}
                  // pending={order.pending}
                  // onBtnClick={() => setViewOrder(true)}
                  onBtnClick={() => dispatch(addToBasket(f))}
                  heartit={() => heartit(f.id)}
                  btnText={t("add-to-cart")}
                  img={`${STORAGE_URL}/${f.image}`}
                  id={f.id}
                />
              </Fragment>
              // <div className='furniture' key={i}>
              //   <div
              //     className='furnitureImg'
              //     style={{ backgroundImage: `url(${f.img})` }}>
              //     <div className='furnitureBtn'>
              //       <Button
              //         link={true}
              //         text='Selling Fast'
              //         style={{
              //           background: "rgba(255, 255, 255, 0.90",
              //           fontFamily: "Poppins-700",
              //           color: "var(--main-color-pink)",
              //           display: "block",
              //           width: "fit-content",
              //           borderRadius: "6px",
              //           textDecoration: "none",
              //           padding: "6px 12px",
              //         }}
              //       />
              //     </div>
              //   </div>
              //   <div className='furnitureInfo'>
              //     <p className='furnitureInfoTitle'>Bronze faucet</p>
              //     <p className='furnitureInfoPrice'>$99.00</p>
              //   </div>
              // </div>
            ))}
          </div>
          {width < 797 && (
            <Button
              link={true}
              text={t("view-more")}
              style={{
                border: "none",
                borderRadius: "8px",
                color: "var(--secondary-color-white)",
                background: "var(--main-color-pink)",
                textDecoration: "none",
                display: "block",
                width: "100%",
                padding: "16px 32px",
                textAlign: "center",
                fontSize: "18px",
                marginTop: "24px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FurnitureInfos;
