import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <nav className="menu-container">
        <div className="menu-list">
          <NavLink to="/popunder">POP UNDER</NavLink>
          <NavLink to="/bannerad">BANNER AD</NavLink>
          <NavLink to="/native">NATIVE</NavLink>
          <NavLink to="/skim">SKIM</NavLink>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Menubar;
