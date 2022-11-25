import Slider from "react-slick";
import React, { useState, useEffect, useContext } from "react";
import { ReferenceDataContext } from "../../../../ReferenceDataContext/ReferenceDataContext";
import { Link } from "react-router-dom";

import { FcCalendar } from "react-icons/fc";

import Heading from "../../../../components/CommonCss/heading/Heading";
import axios from "axios";
import "./ppost.css";

const Ppost = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <div>Loading .......</div>;
  }

  return (
    <>
      <section className="popularPost">
        <Heading title="Latest News" />
        <div className="content">
          <Slider {...settings}>
            {data
              .filter(
                (val) => new Date(val.time).getMonth() == new Date().getMonth()
              )
              .sort(
                (dateA, dateB) => new Date(dateB.time) - new Date(dateA.time)
              )
              .map((val, i) => {
                return (
                  <div className="items" key={i}>
                    <div className="box shadow">
                      <div className="images">
                        <div className="img  h-96">
                          <img className="h-96" src={val.cover} alt="" />
                        </div>
                        <div class="category category1 h-42">
                          <span className="font-bold text-sm mx-3">
                            {val.catgeory.catgeory}
                          </span>
                          <Link to={`/SinglePage/${val.id}`}>
                            <div className="text">
                              <h1 className="title">
                                {val.title.slice(0, 40)} ...
                              </h1>
                              <div className="date flex font-bold text-sm items-center px-3">
                                <FcCalendar />
                                <label>{val.time}</label>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
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

export default Ppost;
