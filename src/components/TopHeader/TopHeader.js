import INSTAGRAM from "../../assets/social-medias/instagram-white.svg";
import YOUTUBE from "../../assets/social-medias/youtube-white.svg";
import FACEBOOK from "../../assets/social-medias/facebook-white.svg";
import TWITTER from "../../assets/social-medias/twitter-white.svg";
import TELEPHONE_WHITE from "../../assets/icons/telephone-white.svg";
import TELEPHONE_PINK from "../../assets/icons/telephone-pink.svg";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import ARROW_DOWN from "../../assets/icons/arrow-down-white.svg";
import "./style.css";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const TopHeader = () => {
  const socialMedias = [INSTAGRAM, YOUTUBE, FACEBOOK, TWITTER];
  const langs = [
    {
      id: 1,
      code: "en",
      longName: "ENGLISH",
      label: <Link>en</Link>,
      key: "0",
    },
    {
      id: 2,
      code: "ru",
      longName: "Русский",
      label: <Link>ru</Link>,
      key: "1",
    },
    {
      id: 3,
      code: "am",
      longName: "Հայերեն",
      label: <Link>am</Link>,
      key: "3",
    },
  ];

  const handleLanguageChange = language => {
    i18next.changeLanguage(language).then(() => {
      const currentPath = window.location.pathname;
      const languagePrefix = currentPath.split("/")[1];
      let newPath;
      if (languagePrefix && languagePrefix.length === 2) {
        newPath = currentPath.replace(`/${languagePrefix}`, `/${language}`);
      } else {
        newPath = `/${language}${currentPath}`;
      }
      window.location.href = newPath;
    });
  };

  const items = [
    {
      label: <Link onClick={() => handleLanguageChange("ru")}>ru</Link>,
      code: "ru",
      key: "0",
    },
    {
      label: <Link onClick={() => handleLanguageChange("am")}>am</Link>,
      code: "am",
      key: "1",
    },
    {
      label: <Link onClick={() => handleLanguageChange("en")}>en</Link>,
      code: "en",
      key: "2",
    },
  ];

  const lang = Cookies.get("i18next");
  const copyLangs = items.filter(item => item.code !== lang);
  const differentLang = langs.find(
    item1 => !copyLangs.some(item2 => item1.id === item2.id)
  );
  const { t } = useTranslation();

  return (
    <div className='topHeaderContainer container'>
      <div className='topHeader1'>
        <div className='topHeaderSocialMedias'>
          {socialMedias.map((sm, i) => (
            <Link className='topHeaderSocialMediaItem' key={i}>
              <img src={sm} alt='Social Media' key={i} />
            </Link>
          ))}
        </div>
        <div className='topHeader1Line'></div>
        <div className='topHeaderTelephone'>
          <img src={TELEPHONE_WHITE} alt='Telephone' />
          <span>000-00-00-00</span>
        </div>
      </div>
      <div className='topHeader2'>
        <button className='topHeaderOrderCallBtn'>
          <img src={TELEPHONE_PINK} alt='Telephone' />
          <span>Order a call</span>
        </button>
        <Dropdown
          menu={{
            items: copyLangs,
          }}
          trigger={["click"]}>
          <button
            onClick={e => e.preventDefault()}
            className='topHeaderLangsBtn'>
            <Space>
              {differentLang.code}
              <img
                src={ARROW_DOWN}
                alt='Arrow'
                className='topHeaderLangBtnImg'
              />
            </Space>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};
