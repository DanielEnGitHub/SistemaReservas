import { useEffect, useState } from "react";
import { toggleSidebar } from "../redux/features/sidebarSlice";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { TRANSPORTISTA, VENDEDOR } from "../Utils/constants";

export const useSidebarContent = (role) => {
  const [activeMenu, setActiveMenu] = useState({
    home: true,
    products: false,
    orders: false,
    submodules: false,
    users: false,
    events: false,
  });

  // sidebar redux state
  const dispatch = useDispatch();
  const onClose = () => dispatch(toggleSidebar());

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // permissions according to the user role
    if (role === TRANSPORTISTA) {
      switch (path) {
        case "/app/products":
        case "/app/orders":
        case "/app/users":
          // redirect to events
          return navigate("/app/events");
      }
    } else if (role === VENDEDOR) {
      switch (path) {
        case "/app/events":
        case "/app/users":
          // redirect to orders
          return navigate("/app/orders");
      }
    }

    // get pathname from url form react router
    const pathname = path.split("/")[2];
    handleClick(!pathname ? "home" : pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const handleClick = (menu) => {
    // retorn new array items with the same key but false value
    const newActiveMenu = { ...activeMenu };
    Object.keys(activeMenu).map((key) => {
      if (key === menu) {
        newActiveMenu[key] = true;
      } else {
        newActiveMenu[key] = false;
      }
      return null;
    });
    setActiveMenu(newActiveMenu);
  };

  return { activeMenu, onClose, handleClick };
};
