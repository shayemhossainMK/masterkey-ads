import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-font md:px-20 px-5 md:py-10 py-5">
      <div className="flex justify-between px-3">
        <a class="text-2xl font-bold uppercase">Logo</a>
        <p className="font-semibold">
          <span className=" text-green-500">BN</span> / EN
        </p>
      </div>
      <div class="navbar bg-base-100">
        <div class="navbar-start lg:hidden">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
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
          <ul class="menu menu-horizontal">
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
        <div class="navbar-end">
          <a class="">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
