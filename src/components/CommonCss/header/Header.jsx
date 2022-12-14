import React, { useState, useContext } from "react";
import Head from "./Head";
import "./header.css";
import { Link, NavLink, useSearchParams, useNavigate } from "react-router-dom";
import { TiTimes } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { useCookies } from "react-cookie";

import Logout from "../../../Logout";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [searchParam, setSearchParam] = useSearchParams();

  const navigate = useNavigate();
  const handelLogout = () => {
    removeCookie("currentUser");
  };
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "#fb4c35" : "white",
      fontWeight: isActive ? "bold" : "light",
    };
  };
  return (
    <>
      <Head />
      <header>
        <div className="containers flex-wrap paddingSmall items-center justify-between lg:flex md:flex sm:flex md:flex-warp lg:flex-warp sm:flex-warp">
          <nav className="w-1/2 ml-5">
            <ul
              className={navbar ? "navbar" : "flex flex-wrap"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <NavLink style={navStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/World">
                  World
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/Business">
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/Health">
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/Sports">
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/Style">
                  Style
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/Media">
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              className="barIcon  w-14"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <TiTimes /> : <FaBars />}
            </button>
          </nav>
          <span className="flex mr-5 items-center xl:gap-5 md:gap-2 sm:flex-warp md:flex-wrap ">
            <span>
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-50 m-5 ">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required=""
                    onChange={(e) => {
                      setSearchParam({ search: e.target.value });
                      console.log(e.target.value);
                      // if (e.target.value.length == 0) {
                      //   navigate("/");
                      // }
                      navigate(`/search/${e.target.value}`);
                    }}
                    value={searchParam.get("search")}
                  />
                </div>
              </form>
            </span>
            <span>
              {cookies.currentUser == null && (
                <Link to="/login">
                  <button className="bg-gray-300 text-black active:bg-gray-700 text-sm font-bold uppercase px-5 py-3 rounded shadow hover:bg-white outline-none focus:outline-none mr-1 mb-1 w-full md:m-0">
                    Login
                  </button>
                </Link>
              )}
            </span>
            <span>
              <Link to="/">
                {cookies.currentUser != null &&
                  (cookies.currentUser.googleId != "" ? (
                    <Logout />
                  ) : (
                    <button onClick={handelLogout}>logout</button>
                  ))}
              </Link>
            </span>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
