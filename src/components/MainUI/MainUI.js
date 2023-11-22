import HOUSE_DESIGN from "../../assets/ui-fake-images/house-design-furnishing-1.svg";
import GO_SHOPPING from "../../assets/ui-fake-images/go-shopping-1.svg";
import SEARCH from "../../assets/icons/search-pink.svg";
import ARROW_LEFT from "../../assets/icons/arrow-left-white.svg";
import ARROW_RIGHT from "../../assets/icons/arrow-right-white.svg";
import Button from "../Button/Button";
import "./style.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import SecondButton from "../SecondButton/SecondButton";

const MainUI = () => {
  const { width } = useWindowSize();

  return (
    <div className='mainUiContainer container'>
      <div className='mainUI_wrapper'>
        {width < 797 && (
          <div
            className='box sidebar'
            style={{ backgroundImage: `url(${HOUSE_DESIGN})` }}>
            {/* <img
            src={HOUSE_DESIGN}
            alt='House Design'
            className='houseDesignImg'
          /> */}
            <div className='mainUIHouseDesignContent'>
              <div className='mainUIHouseDesignArrows'>
                <button className='mainUIHouseDesignLeftBtn'>
                  <img src={ARROW_LEFT} alt='Arrow' />
                </button>
                <button className='mainUIHouseDesignRightBtn'>
                  <img src={ARROW_RIGHT} alt='Arrow' />
                </button>
              </div>
              <div className='mainUIHouseDesignInfo'>
                <p className='mainUIHouseDesignInfo_title'>
                  House design & furnishing
                </p>
                <p className='mainUIHouseDesignInfo_desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <Button
                text='Apply'
                link={true}
                className='mainUIHouseDesignInfo_applyBtn'
                style={{
                  background: "var(--secondary-color-white)",
                  color: "var(--main-color-pink)",
                  textDecoration: "none",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        )}
        <div
          className='box header'
          style={{ backgroundImage: `url(${GO_SHOPPING})` }}>
          {/* <img
            src={GO_SHOPPING}
            alt='House Design'
            className='houseDesignImg'
          /> */}
          <div className='mainUIHouseDesignContent'>
            <div className='mainUIHouseDesignInfo'>
              <p className='mainUIHouseDesignInfo_title'>Go Shopping</p>
              <p className='mainUIHouseDesignInfo_desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <SecondButton className='moreBtnLarge' />
          </div>
        </div>
        {width > 797 && (
          <div
            className='box sidebar'
            style={{ backgroundImage: `url(${HOUSE_DESIGN})` }}>
            {/* <img
            src={HOUSE_DESIGN}
            alt='House Design'
            className='houseDesignImg'
          /> */}
            <div className='mainUIHouseDesignContent'>
              <div className='mainUIHouseDesignArrows'>
                <button className='mainUIHouseDesignLeftBtn'>
                  <img src={ARROW_LEFT} alt='Arrow' />
                </button>
                <button className='mainUIHouseDesignRightBtn'>
                  <img src={ARROW_RIGHT} alt='Arrow' />
                </button>
              </div>
              <div className='mainUIHouseDesignInfo'>
                <p className='mainUIHouseDesignInfo_title'>
                  House design & furnishing
                </p>
                <p className='mainUIHouseDesignInfo_desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <Button
                text='Apply'
                link={true}
                className='mainUIHouseDesignInfo_applyBtn'
                style={{
                  background: "var(--secondary-color-white)",
                  color: "var(--main-color-pink)",
                  textDecoration: "none",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        )}
        <div className='box content'>
          <p className='mainUISearchTitle'>Search for any product</p>
          <div className='search'>
            <img src={SEARCH} alt='Search' />
            <input placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainUI;
