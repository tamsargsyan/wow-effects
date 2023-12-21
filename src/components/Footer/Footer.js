import IMG_1 from "../../assets/ui-fake-images/footer-1.jpg";
import IMG_2 from "../../assets/ui-fake-images/footer-2.jpg";
import IMG_3 from "../../assets/ui-fake-images/footer-3.jpg";
import IMG_4 from "../../assets/ui-fake-images/footer-4.jpg";
import IMG_5 from "../../assets/ui-fake-images/footer-5.jpg";
import IMG_6 from "../../assets/ui-fake-images/footer-6.jpg";
import WOW_LOGO from "../../assets/logo/wow-logo.svg";
import INSTAGRAM from "../../assets/social-medias/instagram-white.svg";
import YOUTUBE from "../../assets/social-medias/youtube-white.svg";
import FACEBOOK from "../../assets/social-medias/facebook-white.svg";
import TWITTER from "../../assets/social-medias/twitter-white.svg";
import TELEPHONE from "../../assets/icons/telephone-pink.svg";
import SMS from "../../assets/icons/sms-pink.svg";
import "./style.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Footer = ({ slider }) => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";
  const imgs = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6];
  const { width } = useWindowSize();

  return (
    <div className='footerContainer'>
      {slider && (
        <div className='footerImages'>
          {(width < 797 ? imgs.slice(0, 3) : imgs).map((img, i) => (
            <img src={img} alt='Footer' key={i} />
          ))}
        </div>
      )}
      <div className='footer container'>
        <div className='footer1'>
          <div className='footer1Logo'>
            <img src={WOW_LOGO} alt='Wow' className='footer1LogoImg' />
            <div className='footerSocialMeedias'>
              <img src={INSTAGRAM} alt='Instagram' />
              <img src={YOUTUBE} alt='Youtube' />
              <img src={FACEBOOK} alt='Facebook' />
              <img src={TWITTER} alt='Twitter' />
            </div>
          </div>
          {width < 797 ? (
            <div className='footerServicesHelpfullLinks'>
              <div className='footerServices'>
                <p className='footerTitle'>{t("services")}</p>
                <div className='footerItems'>
                  <p>{t("bottomHeader.customcraft")}</p>
                  <p>{t("bottomHeader.interior-design")}</p>
                  <p>
                    {t("bottomHeader.shop")}
                    {/* <img src={ARROW} /> */}
                  </p>
                </div>
              </div>
              <div className='footerHelpfullLinks'>
                <p className='footerTitle'>{t("helpful-links")}</p>
                <div className='footerHelpfullLinksWrapper'>
                  <div className='footerItems'>
                    <p>{t("bottomHeader.about-us")}</p>
                    <p>{t("bottomHeader.portfolio")}</p>
                    <p>{t("bottomHeader.contact-us")}</p>
                  </div>
                  <div className='footerItems'>
                    <p>{t("bottomHeader.blog")}</p>
                    <p>{t("bottomHeader.career")}</p>
                    <p>{t("faq")}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className='footerServices'>
                <p className='footerTitle'>{t("services")}</p>
                <div className='footerItems'>
                  <p>{t("bottomHeader.customcraft")}</p>
                  <p>{t("bottomHeader.interior-design")}</p>
                  <p>
                    {t("bottomHeader.shop")}
                    {/* <img src={ARROW} /> */}
                  </p>
                </div>
              </div>
              <div className='footerHelpfullLinks'>
                <p className='footerTitle'>{t("helpful-links")}</p>
                <div className='footerHelpfullLinksWrapper'>
                  <div className='footerItems'>
                    <p>{t("bottomHeader.about-us")}</p>
                    <p>{t("bottomHeader.portfolio")}</p>
                    <p>{t("bottomHeader.contact-us")}</p>
                  </div>
                  <div className='footerItems'>
                    <p>{t("bottomHeader.blog")}</p>
                    <p>{t("bottomHeader.career")}</p>
                    <p>{t("faq")}</p>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className='footerContact'>
            <p className='footerTitle'>Contact</p>
            <div className='footerItems'>
              <p>
                <img src={TELEPHONE} alt='Telephone' />
                name@example.com
              </p>
              <p>
                <img src={SMS} alt='SMS' />
                000-00-00-00
              </p>
            </div>
          </div>
          <div className='footerSubscribe'>
            <p className='footerTitle'>{t("subscribe")}</p>
            <div className='footerItems'>
              <input type='email' placeholder='E-mail address' />
              <Button
                className='footerSendBtn'
                text={t("send")}
                style={{
                  borderRadius: "4px",
                  background: "var(--main-color-pink)",
                  color: "var(--secondary-color-white)",
                  border: "none",
                  width: "fit-content",
                }}
              />
            </div>
          </div>
        </div>
        <div className='footerBottom'>
          <div className='footerPrivacyWrapper'>
            <NavLink to={`/${lang}/privacy-policy`} className='footerPrivacy'>
              Privacy Policy
            </NavLink>
            <NavLink className='footerTerms'>Terms of Service</NavLink>
          </div>
          <div className='footerCopyRight'>
            <p>© 2023 , All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
