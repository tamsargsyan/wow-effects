import PERSON from "../../../assets/person-images/1.jpg";
import ORDERS from "../../../assets/icons/orders-tick-pink.svg";
import HEART from "../../../assets/icons/heart-pink.svg";
import LOCATION from "../../../assets/icons/location-pink.svg";
import PEN from "../../../assets/icons/pen-white.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import AccountLayout from "../AccountLayout";

const ControlPanel = () => {
  return (
    <AccountLayout>
      <div className='controlPanelContainer'>
        <NavLink className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview controlPanelWaypointOverviewPerson'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={PERSON} alt='Person' />
            </div>
            <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div>
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>Name Surname</p>
            <p className='controlPanelDescription'>namesurname@gmail.com</p>
          </div>
        </NavLink>
        <NavLink className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={ORDERS} alt='Orders' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>Orders</p>
            <p className='controlPanelDescription'>
              Next purchase : <span> is not expected</span>
            </p>
          </div>
        </NavLink>
        <NavLink className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={HEART} alt='Heart' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>Interior Design</p>
            <p className='controlPanelDescription'>
              Next purchase : <span> is not expected</span>
            </p>
          </div>
        </NavLink>
        <NavLink className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={HEART} alt='Heart' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>Custom furniture production</p>
            <p className='controlPanelDescription'>
              Next purchase : <span> is not expected</span>
            </p>
          </div>
        </NavLink>
        <NavLink className='controlPanelWaypoint'>
          <div className='controlPanelWaypointOverview'>
            <div className='controlPanelWaypointOverviewIcon'>
              <img src={LOCATION} alt='Location' />
            </div>
            {/* <div className='controlPanelPen'>
              <img src={PEN} alt='Pen' />
            </div> */}
          </div>
          <div className='controlPanelInfo'>
            <p className='controlPanelTitle'>Address</p>
            <p className='controlPanelDescription'>
              Next purchase : <span> is not expected</span>
            </p>
          </div>
        </NavLink>
      </div>
    </AccountLayout>
  );
};

export default ControlPanel;
