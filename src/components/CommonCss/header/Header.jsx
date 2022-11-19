import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";
import { TiTimes } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { useCookies } from "react-cookie";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const handelLogout = () => {
    removeCookie("currentUser");
  };
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culture">Culture</Link>
              </li>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
              <li>
                <Link to="/memes">Memes</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/boxed">Boxed</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              {console.log(cookies.currentUser == null)}
              <li>
                {cookies.currentUser == null && <Link to="/login">Login</Link>}
              </li>
              <li>
                <Link to="/">
                  {cookies.currentUser != null && (
                    <button onClick={handelLogout}>logout</button>
                  )}
                </Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <TiTimes /> : <FaBars />}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
