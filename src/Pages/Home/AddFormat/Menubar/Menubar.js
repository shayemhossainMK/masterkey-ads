import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomLink from "../../../../Shared/CustomLink";

const Menubar = () => {
  return (
    <div className=" mt-10">
      <nav className="menu-container text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 menu-list mb-16">
          <CustomLink
            className="px-7 mx-10 bg-gray-900 py-2 rounded-3xl shadow-md "
            to="/popunder"
          >
            POP-UNDE
          </CustomLink>
          <CustomLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/bannerad"
          >
            BANNER AD
          </CustomLink>
          <CustomLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/native"
          >
            NATIVE
          </CustomLink>
          <CustomLink
            className="px-7 mx-10 bg-gray-200 py-2 rounded-3xl shadow-md "
            to="/skim"
          >
            SKIM
          </CustomLink>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Menubar;
