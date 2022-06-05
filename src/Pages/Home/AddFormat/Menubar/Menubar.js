import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div className=" mt-10">
      <nav className="menu-container text-center">
        <div className="menu-list mb-16">
          <NavLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/popunder"
          >
            POP UNDER
          </NavLink>
          <NavLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/bannerad"
          >
            BANNER AD
          </NavLink>
          <NavLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/native"
          >
            NATIVE
          </NavLink>
          <NavLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/skim"
          >
            SKIM
          </NavLink>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Menubar;
