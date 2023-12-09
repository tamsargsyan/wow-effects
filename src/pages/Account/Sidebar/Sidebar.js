import { NavLink } from "react-router-dom";
import { accountWaypoints } from "../data";
import "./style.css";

const Sidebar = () => {
  return (
    <div className='accountSidebar'>
      {accountWaypoints.map((waypoint, i) => (
        <NavLink
          end
          to={waypoint.to}
          key={i + waypoint.title}
          className='sidebarWaypoint'>
          <img src={waypoint.icon} alt={waypoint.title} />
          {waypoint.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
