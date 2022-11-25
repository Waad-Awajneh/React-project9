import React, { useState, useEffect, useContext } from "react";
import { ReferenceDataContext } from "../../../../ReferenceDataContext/ReferenceDataContext";

import axios from "axios";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heading from "../../../../components/CommonCss/heading/Heading";

const Popular = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  console.log(data);
  if (isLoading) {
    return <div>Loading .......</div>;
  }
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {data
              .filter((val) => val.popular == "yes")
              .sort(
                (dateA, dateB) => new Date(dateB.time) - new Date(dateA.time)
              )
              .map((val, i) => {
                return (
                  <div className="items" key={i}>
                    <div className="box shadow">
                      <div className="images row">
                        <div className=" w-48  h-36 img">
                          <img className="w-48 h-36" src={val.cover} alt="" />
                        </div>
                      </div>
                      <Link to={`/SinglePage/${val.id}`}>
                        <div className="text row">
                          <h1 className="title">{val.title.slice(0, 40)}...</h1>
                          <div className="date flex text-center items-center px-3">
                            <FcCalendar />
                            <label>{val.time}</label>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
