import React from "react";
import { SiShopware } from "react-icons/si";
// dummy demo data
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-l-full text-md bg-blue-700 ml-2 mb-2 text-gray-100 font-bold";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-l-full text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-blue-100 ml-2 mb-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware className="text-3xl " /> <span>Kampak</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-blue-700 mt-4 block "
              >
                <MdOutlineCancel className="bg-transparent" />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
