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

const items = [
  {
    label: <Link>ru</Link>,
    key: "0",
  },
  {
    label: <Link>am</Link>,
    key: "1",
  },
];

export const TopHeader = () => {
  const socialMedias = [INSTAGRAM, YOUTUBE, FACEBOOK, TWITTER];

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
            items,
          }}
          trigger={["click"]}>
          <button
            onClick={e => e.preventDefault()}
            className='topHeaderLangsBtn'>
            <Space>
              En
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
