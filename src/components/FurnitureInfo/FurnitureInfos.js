import Button from "../Button/Button";
import FullTitle from "../FullTitle/FullTitle";
import FURNITURE_1 from "../../assets/ui-fake-images/burning-suggestions-1.jpg";
import FURNITURE_2 from "../../assets/ui-fake-images/burning-suggestions-2.jpg";
import FURNITURE_3 from "../../assets/ui-fake-images/burning-suggestions-3.jpg";
import FURNITURE_4 from "../../assets/ui-fake-images/burning-suggestions-4.jpg";
import FURNITURE_5 from "../../assets/ui-fake-images/furniture-1.jpg";
import FURNITURE_6 from "../../assets/ui-fake-images/furniture-2.jpg";
import FURNITURE_7 from "../../assets/ui-fake-images/furniture-3.jpg";
import FURNITURE_8 from "../../assets/ui-fake-images/furniture-4.jpg";
import "./style.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { removeHtmlTags } from "../../Helpers/removeHtmlTags";

const FurnitureInfos = ({ product_suggestions }) => {
  const furnitures = [
    {
      id: 1,
      name: "burning suggestions",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      furnitures: [
        {
          id: 1,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_1,
        },
        {
          id: 2,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_2,
        },
        {
          id: 3,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_3,
        },
        {
          id: 4,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_4,
        },
      ],
    },
    {
      id: 2,
      name: "Furniture",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      furnitures: [
        {
          id: 1,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_5,
        },
        {
          id: 2,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_6,
        },
        {
          id: 3,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_7,
        },
        {
          id: 4,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_8,
        },
      ],
    },
    {
      id: 3,
      name: "Furniture parts",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      furnitures: [
        {
          id: 1,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_1,
        },
        {
          id: 2,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_2,
        },
        {
          id: 3,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_3,
        },
        {
          id: 4,
          name: "Bronze faucet",
          price: "99.00",
          img: FURNITURE_4,
        },
      ],
    },
  ];

  const { width } = useWindowSize();
  const lang = "en";

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
            {furnitures[0].furnitures.map((f, i) => (
              <div className='furniture' key={i}>
                <div
                  className='furnitureImg'
                  style={{ backgroundImage: `url(${f.img})` }}>
                  <div className='furnitureBtn'>
                    <Button
                      link={true}
                      text='Selling Fast'
                      style={{
                        background: "rgba(255, 255, 255, 0.90",
                        fontFamily: "Poppins-700",
                        color: "var(--main-color-pink)",
                        display: "block",
                        width: "fit-content",
                        borderRadius: "6px",
                        textDecoration: "none",
                        padding: "6px 12px",
                      }}
                    />
                  </div>
                </div>
                <div className='furnitureInfo'>
                  <p className='furnitureInfoTitle'>Bronze faucet</p>
                  <p className='furnitureInfoPrice'>$99.00</p>
                </div>
              </div>
            ))}
          </div>
          {width < 797 && (
            <Button
              link={true}
              text='View More'
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
