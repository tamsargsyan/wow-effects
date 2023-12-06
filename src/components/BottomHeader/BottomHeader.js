import { Link, NavLink } from "react-router-dom";
import WOW_LOGO from "../../assets/logo/wow-logo.svg";
import "./style.css";
import Button from "../Button/Button";
import { Dropdown, Space } from "antd";
import ARROW_DOWN from "../../assets/icons/arrow-down-white.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";

const BottomHeader = () => {
  const menu = [
    {
      id: 1,
      name: "Custom furniture production",
      to: "/wow/custom-furniture-production",
      dropdown: null,
    },
    {
      id: 2,
      name: "Interior Design",
      to: "/wow/interior-design",
      dropdown: null,
    },
    {
      id: 3,
      name: "Shop",
      to: "",
      dropdown: [
        {
          label: <Link>1st menu item</Link>,
          key: "0",
        },
        {
          label: <Link>1st menu item</Link>,
          key: "1",
        },
        {
          label: <Link>1st menu item</Link>,
          key: "3",
        },
      ],
    },
    {
      id: 4,
      name: "About Us",
      to: "/wow/about-us",
      dropdown: null,
    },
    {
      id: 5,
      name: "Portfolio",
      to: "/wow/portfolio",
      dropdown: null,
    },
    {
      id: 6,
      name: "Contact Us",
      to: "/wow/contact-us",
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

  return (
    <div
      className={`${
        visible ? "bottomHeaderContainerVisible" : "bottomHeaderContainerHidden"
      } bottomHeaderContainer container`}>
      <div className='bottomHeaderLogo'>
        <NavLink to='/wow'>
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
                  onClick={e => e.preventDefault()}
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
                      onClick={e => e.preventDefault()}
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
