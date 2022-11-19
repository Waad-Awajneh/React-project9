// import React from "react";
import "./footer.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { Footer } from "flowbite-react";
import React, { useState, useEffect, useContext } from "react";
import { ReferenceDataContext } from "./../../../ReferenceDataContext/ReferenceDataContext";
import { Link } from "react-router-dom";

const Footers = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);
  const SumLable = (catgeory) => {
    // console.log(catgeory);
    return data?.filter((item) => item.catgeory.catgeory == catgeory).length;
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <Link to={"/"}>
              {" "}
              <img
                src="../images/logo.png"
                className="bg-white w-3/4  "
                alt=""
              />
            </Link>
            <p>
              News the world leader in online news and information and seeks to
              inform, engage and empower the world.
            </p>
            <BsFillEnvelopeFill />
            <span> info@news.com </span> <br />
            <FaHeadphonesAlt />
            <span> +962 777487777</span>
          </div>
          <div className="box">
            <h3>SPORT</h3>

            {data
              ?.filter((item) => item.catgeory.catgeory == "Sport")
              .filter((item, i) => i < 2)
              .map((item) => {
                return (
                  <div className="item">
                    <img src={item.cover} alt="" />
                    <p>{item.title}</p>
                  </div>
                );
              })}
          </div>
          <div className="box">
            <h3>Health</h3>
            {data
              ?.filter((item) => item.catgeory.catgeory == "Health")
              .filter((item, i) => i < 2)
              .map((item) => {
                return (
                  <div className="item">
                    <img src={item.cover} alt="" />
                    <p>{item.title}</p>
                  </div>
                );
              })}
          </div>
          <div className="box">
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <Link to="/World">World</Link>
                <label>{SumLable("World")}</label>
              </li>
              <li>
                <Link to="/Busness">Busness</Link>
                <label>{SumLable("Busness")}</label>
              </li>
              <li>
                <Link to="/Health">Health</Link>
                <label>{SumLable("Health")}</label>
              </li>
              <li>
                <Link to="/Sports">Sports</Link>
                <label>{SumLable("Sports")}</label>
              </li>
              <li>
                <Link to="/Style">Style</Link>
                <label>{SumLable("Style")}</label>
              </li>
              <li>
                <Link to="/Media">Media</Link>
                <label>{SumLable("Media")}</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <Footer.Copyright href="/landing" by="discussion" year={2022} />
        </div>
      </div>
    </>
  );
};

export default Footers;
