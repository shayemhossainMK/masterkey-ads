import React from "react";
import "./Navbar.css";
import logo from "../../img/logo/logoOne.png";
import CustomLinkTwo from "../CustomLinkTwo";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";

const Navbar = () => {
  return (
    <div className="nav-font md:px-20 px-1 md:py-7 py-5 bg-gray-100">
      <div className="flex justify-between px-5">
        <a class="text-2xl font-bold hidden md:block uppercase">
          <Link to="/">
            <img className="w-28" src={logo} alt="" />
          </Link>
        </a>
        <p className="font-semibold hidden md:block">
          <span className=" text-green-500">BN</span> / EN
        </p>
      </div>
      <div class="navbar">
        <div class="navbar-start lg:hidden">
          <div class="dropdown">
            <label tabindex="0" class=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* this is for small screen */}
              <li>
                <CustomLinkTwo to="/">HOME</CustomLinkTwo>
              </li>
              <li>
                <CustomLinkTwo to="/advertisers">ADVERTISERS</CustomLinkTwo>
              </li>
              <li>
                <CustomLinkTwo to="/publishers">PUBLISHERS</CustomLinkTwo>
              </li>
              <li>
                <CustomLinkTwo to="/influancers">INFLUENCERS</CustomLinkTwo>
              </li>
              <li>
                <CustomLinkTwo to="/addformatsmain">AD FORMATS</CustomLinkTwo>
              </li>
              <li>
                <CustomLinkTwo to="/blogs">BLOG</CustomLinkTwo>
              </li>
              <li>
                <CustomLinkTwo to="/contact">CONTACT US </CustomLinkTwo>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal text-secondary">
            {/* this is for big screen */}
            <li>
              <CustomLinkTwo to="/">HOME</CustomLinkTwo>
            </li>
            <li>
              <CustomLinkTwo to="/advertisers">ADVERTISERS</CustomLinkTwo>
            </li>
            <li>
              <CustomLinkTwo to="/publishers">PUBLISHERS</CustomLinkTwo>
            </li>
            <li>
              <CustomLinkTwo to="/influancers">INFLUENCERS</CustomLinkTwo>
            </li>
            <li>
              <CustomLinkTwo to="/addformatsmain">AD FORMATS</CustomLinkTwo>
            </li>
            <li>
              <CustomLinkTwo to="/blogs">BLOG</CustomLinkTwo>
            </li>
            <li>
              <CustomLinkTwo to="/contact">CONTACT US </CustomLinkTwo>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <div className="flex items-center bg-base-100 shadow-xl md:rounded-3xl rounded-xl px-5 md:px-7 py-2 md:py-2">
            <Link to="/login">
              <p className="font-semibold shadow-md px-3 hover:bg-gray-200 cursor-pointer py-1 rounded-full">
                Login
              </p>
            </Link>
            <Link to="signup">
              <p className="shadow-md ml-3 px-4 md:px-7 md:py-1 md:rounded-3xl rounded-xl text-white btn-primary">
                Signup
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
