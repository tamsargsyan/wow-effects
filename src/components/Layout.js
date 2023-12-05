import { Outlet } from "react-router-dom";
import BottomHeader from "./BottomHeader/BottomHeader";
import { TopHeader } from "./TopHeader/TopHeader";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
