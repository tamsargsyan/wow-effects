import { NavLink } from "react-router-dom";
import WOW_LOGO from "../../assets/logo/wow-logo.svg";
import "./style.css";
import Button from "../Button/Button";
import { Dropdown, Space } from "antd";
import ARROW_DOWN from "../../assets/icons/arrow-down-white.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import HEART from "../../assets/icons/heart-without-bg.svg";
import BASKET from "../../assets/icons/basket-without-bg.svg";
import Img from "../Img";
import { useDispatch, useSelector } from "react-redux";
import { openBasketModal } from "../../redux/actions/basketActions";
import PERSON from "../../assets/person-images/1.jpg";

const BottomHeader = () => {
  const menu = [
    {
      id: 1,
      name: "Custom furniture production",
      to: "/customcraft",
      dropdown: null,
    },
    {
      id: 2,
      name: "Interior Design",
      to: "/interior-design",
      dropdown: null,
    },
    {
      id: 3,
      name: "Shop",
      to: "/shop",
      dropdown: null,
      // dropdown: [
      //   {
      //     label: <Link>1st menu item</Link>,
      //     key: "0",
      //   },
      //   {
      //     label: <Link>1st menu item</Link>,
      //     key: "1",
      //   },
      //   {
      //     label: <Link>1st menu item</Link>,
      //     key: "3",
      //   },
      // ],
    },
    {
      id: 4,
      name: "About Us",
      to: "/about-us",
      dropdown: null,
    },
    {
      id: 5,
      name: "Blog",
      to: "/blog",
      dropdown: null,
    },
    {
      id: 6,
      name: "Portfolio",
      to: "/portfolio",
      dropdown: null,
    },
    {
      id: 7,
      name: "Contact Us",
      to: "/contact-us",
      dropdown: null,
    },
  ];

  const { width } = useWindowSize();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basket.items);
  const favoriteProjects = JSON.parse(
    localStorage.getItem("favoriteProjects") || "[]"
  );

  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <div
      className={`${
        visible ? "bottomHeaderContainerVisible" : "bottomHeaderContainerHidden"
      } bottomHeaderContainer container`}>
      <div className='bottomHeaderLogo'>
        <NavLink to='/'>
          <img src={WOW_LOGO} alt='Wow logo' />
        </NavLink>
      </div>
      <div className='bottomHeader2'>
        <div className='bottomHeaderMenu'>
          {menu.map(m => {
            return m.dropdown !== null ? (
              <Dropdown
                key={m.id}
                menu={{
                  items: m.dropdown,
                }}
                trigger={["click"]}>
                <NavLink
                  // onClick={e => e.preventDefault()}
                  to={m.to}
                  className='bottomHeaderShopBtn'>
                  <Space>
                    {m.name}
                    <img
                      src={ARROW_DOWN}
                      alt='Arrow'
                      className='bottomHeaderShopBtnImg'
                    />
                  </Space>
                </NavLink>
              </Dropdown>
            ) : (
              <NavLink to={m.to} key={m.id}>
                {m.name}
              </NavLink>
            );
          })}
        </div>
        <div className='bottomHeaderSignIn'>
          <div className='quickPick'>
            <button className='quickPickFavorites'>
              <div className='quickPickBasketQuantity'>
                {favoriteProjects.length}
              </div>
              <Img src={HEART} alt='Heart' />
            </button>
            <button
              className='quickPickBasket'
              onClick={() =>
                basketItems.length > 0 && dispatch(openBasketModal())
              }>
              <div className='quickPickBasketQuantity'>
                {basketItems.length}
              </div>
              <Img src={BASKET} alt='Basket' />
            </button>
          </div>
          {isAuthenticated ? (
            <NavLink
              to='account/control-panel'
              className='navbarProfilePicContainer'>
              <Img src={PERSON} alt='Profile Pic' />
            </NavLink>
          ) : (
            <>
              <Button
                link={true}
                to='sign-in'
                text='Sign In'
                style={{
                  backgroundColor: "var(--main-bg-color-black)",
                  border: "none",
                  fontFamily: "Poppins-600",
                  color: "var(--secondary-color-white)",
                  borderRadius: "var(--main-border-radius)",
                }}
                className='bottomHeaderSignInBtn'
              />
              <Button
                link={true}
                to='sign-up'
                text='Register'
                style={{
                  backgroundColor: "var(--main-color-pink)",
                  border: "none",
                  fontFamily: "Poppins-600",
                  borderRadius: "var(--main-border-radius)",
                  color: "var(--secondary-color-white)",
                }}
                className='bottomHeaderRegisterBtn'
              />
            </>
          )}
        </div>
        <nav role='navigation' className='mobileMenu'>
          <div id='menuToggle'>
            <input type='checkbox' />
            <span></span>
            <span></span>
            <span></span>
            <ul id='menu'>
              {menu.map(m => {
                return m.dropdown !== null ? (
                  <Dropdown
                    key={m.id}
                    menu={{
                      items: m.dropdown,
                    }}
                    trigger={["click"]}>
                    <NavLink
                      // onClick={e => e.preventDefault()}
                      to={m.to}
                      className='bottomHeaderShopBtnMobile'>
                      <Space>
                        {m.name}
                        <img
                          src={ARROW_DOWN}
                          alt='Arrow'
                          className='bottomHeaderShopBtnImg'
                        />
                      </Space>
                    </NavLink>
                  </Dropdown>
                ) : (
                  <NavLink key={m.id}>{m.name}</NavLink>
                );
              })}
            </ul>
          </div>
        </nav>
        {width < 700 && (
          <>
            <div className='bottomHeaderLogoMobile'>
              <NavLink>
                <img src={WOW_LOGO} alt='Wow logo' />
              </NavLink>
            </div>
            <div className='bottomHeaderUser'></div>
          </>
        )}
      </div>
    </div>
  );
};

export default BottomHeader;
