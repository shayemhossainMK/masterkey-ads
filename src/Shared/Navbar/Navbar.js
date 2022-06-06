import React from "react";
import CustomLink from "../CustomLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-font md:px-20 px-1 md:py-10 py-5 bg-gray-100">
      <div className="flex justify-between px-5">
        <a class="text-2xl font-bold hidden md:block uppercase">Logo</a>
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
                <a>HOME</a>
              </li>
              <li>
                <a>ADVERTISERS</a>
              </li>
              <li>
                <a>PUBLISHERS</a>
              </li>
              <li>
                <a>INFLUENCERS</a>
              </li>
              <li>
                <a>AD FORMATS</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
              <li>
                <a>CONTACT US </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal text-secondary ">
            {/* this is for big screen */}
            <li className="hover:text-primary">
              <a className="text-primary">HOME</a>
            </li>
            <li>
              <a>ADVERTISERS</a>
            </li>
            <li>
              <a>PUBLISHERS</a>
            </li>
            <li>
              <a>INFLUENCERS</a>
            </li>
            <li>
              <a>AD FORMATS</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>CONTACT US </a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <div className="flex items-center bg-base-100 shadow-xl md:rounded-3xl rounded-xl px-5 md:px-7 py-2 md:py-2">
            <p className="font-semibold">Login</p>
            <p className="shadow-md ml-3 px-4 md:px-7 md:py-1 md:rounded-3xl rounded-xl text-white btn-primary">
              Signup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
