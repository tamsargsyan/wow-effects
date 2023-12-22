import PERSON from "../../../assets/person-images/1.jpg";
import ORDERS from "../../../assets/icons/orders-tick-pink.svg";
import HEART from "../../../assets/icons/heart-pink.svg";
import LOCATION from "../../../assets/icons/location-pink.svg";
import PEN from "../../../assets/icons/pen-white.svg";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import AccountLayout from "../AccountLayout";
import { useTranslation } from "react-i18next";
import ARROW from "../../../assets/icons/arrow-right-gray.svg";
import Img from "../../../components/Img";
import Cookies from "js-cookie";

const ControlPanel = () => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AccountLayout>
      <div className='controlPanelContainer'>
        <div className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview controlPanelWaypointOverviewPerson'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={PERSON} alt='Person' />
            </div>
            <Link to={`/${lang}/account/settings`} className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </Link>
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>
              {user.name || ""} {user.surname || ""}
            </p>
            <p className='controlPanelDescription'>{user.email}</p>
          </div>
        </div>
        <div className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={ORDERS} alt='Orders' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>{t("orders")}</p>
            <p className='controlPanelDescription'>
              {t("next_purchase")} : <span> is not expected</span>
            </p>
          </div>
        </div>
        <div className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={HEART} alt='Heart' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>{t("design")}</p>
            <p className='controlPanelDescription'>
              {t("next_purchase")} : <span> is not expected</span>
            </p>
          </div>
        </div>
        <div className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={HEART} alt='Heart' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>{t("crafted")}</p>
            <p className='controlPanelDescription'>
              {t("next_purchase")} : <span> is not expected</span>
            </p>
          </div>
        </div>
        <div className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={LOCATION} alt='Location' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>{t("address")}</p>
            <Link
              to={`/${lang}/account/address`}
              className='controlPanelDescription controlPanelDescriptionLink'>
              {t("check_your_address")} <Img src={ARROW} alt='Arrow' />
            </Link>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default ControlPanel;
