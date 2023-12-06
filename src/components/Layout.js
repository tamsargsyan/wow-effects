import { Outlet, useLocation } from "react-router-dom";
import BottomHeader from "./BottomHeader/BottomHeader";
import { TopHeader } from "./TopHeader/TopHeader";

const Layout = () => {
  const location = useLocation();
  const hideHeadersPaths = ["/sign-in", "/sign-up"];
  const shouldHideHeaders = hideHeadersPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaders && <TopHeader />}
      {!shouldHideHeaders && <BottomHeader />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
