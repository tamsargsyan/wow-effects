import CONTROL_PANEL from "../../assets/icons/control-panel-white.svg";
import SETTINGS from "../../assets/icons/settings-white.svg";
import PEN from "../../assets/icons/pen-design-white.svg";
import PALETTE_ROUND from "../../assets/icons/palette-round-white.svg";
import ORDERS from "../../assets/icons/orders-tick-white.svg";
import LOCATION from "../../assets/icons/location-white.svg";
import LOGOUT from "../../assets/icons/logout-white.svg";

export const accountWaypoints = [
  {
    id: 1,
    title: "control_panel",
    to: "/account/control-panel",
    icon: CONTROL_PANEL,
  },
  {
    id: 2,
    title: "profile_settings",
    to: "/account/settings",
    icon: SETTINGS,
  },
  {
    id: 3,
    title: "crafted",
    to: "/account/crafted",
    icon: PEN,
  },
  {
    id: 4,
    title: "design",
    to: "/account/design",
    icon: PALETTE_ROUND,
  },
  {
    id: 5,
    title: "orders",
    to: "/account/orders",
    icon: ORDERS,
  },
  {
    id: 6,
    title: "my_addresses",
    to: "/account/address",
    icon: LOCATION,
  },
  {
    id: 7,
    title: "logout",
    to: "/account/logout",
    icon: LOGOUT,
  },
];

export const generateWaypoints = (customIcons = {}, includeLogout = true) => {
  const modifiedWaypoints = accountWaypoints.map(waypoint => {
    const { id, title, to } = waypoint;
    const icon = customIcons[waypoint.id] || waypoint.icon;
    return { id, title, to, icon };
  });

  if (!includeLogout) {
    return modifiedWaypoints.filter(waypoint => waypoint.title !== "Log out");
  }
  return modifiedWaypoints;
};
