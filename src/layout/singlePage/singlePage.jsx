import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Side from "./../Home/sideContent/side/Side";
import { FaQuoteLeft } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrFacebook } from "react-icons/gr";
import { ReferenceDataContext } from "./../../ReferenceDataContext/ReferenceDataContext";

import "./../Home/mainContent/Homes/home.css";
import "./singlePage.css";
import "./../Home/sideContent/side/side.css";
import SinglePageSlider from "./slider/SinglePageSlider";
import axios from "axios";

const SinglePage = () => {
  const { id } = useParams();
  const { data } = useContext(ReferenceDataContext);
  const [item, setItem] = useState([]);
  // const [hero, setHero] = useState([]);

  // useEffect(() => {
  //   const config = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/GetHero",
  //     headers: {},
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       setHero(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    const item = data.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      console.log(item);

      setItem(item);
    }
  }, [data]);

  if (item.length == 0) return <div> LOading ....</div>;
  return (
    <>
      <main>
        <SinglePageSlider catgeory={item.catgeory.catgeory} />
        <div className="containers mx-5">
          <section className="mainContent details">
            <h1 className="title">{item.title}</h1>

            <div className="author">
              <span>by</span>
              <img src={item.authorImg} alt="" />
              <p> {item.authorName} on</p>
              <label>{item.time}</label>
            </div>

            <div className="social">
              <div className="socBox flex items-center text-center mx-2 px-2">
                <GrFacebook />
                <span className="mx-2">SHARE</span>
              </div>
              <div className="socBox flex items-center text-center mx-2 px-2">
                <IoLogoTwitter />
                <span className="mx-2">TWITTER</span>
              </div>
            </div>

            <div className="desctop py-5">
              <>
                <p>{item.para}</p>
                <p>{item.para1}</p>
              </>
            </div>
            <img src={item.cover} alt="" />

            <p className="my-5">{item.para3}</p>

            <div className="descbot py-6">
              <>
                <h1>{item.details.title}</h1>
                <p>{item.details.para1}</p>
              </>
            </div>

            <div className="quote my-5">
              <FaQuoteLeft />
              <p>{item.details.quote}</p>
            </div>

            <div className="desctop py-5">
              <>
                <p>{item.details.para2}</p>
                <p>{item.details.para3}</p>
              </>
            </div>
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default SinglePage;
