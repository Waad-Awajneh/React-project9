import axios from "axios";
import Slider from "react-slick";
import React, { useState, useEffect, useContext } from "react";
import { ReferenceDataContext } from "../../../../ReferenceDataContext/ReferenceDataContext";

import Heading from "../../../../components/CommonCss/heading/Heading";

import "../Ppost/ppost.css";
import { Link } from "react-router-dom";

const Life = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="popularPost life">
        <Heading title="Paid Content" />
        <div className="content">
          <Slider {...settings}>
            {data
              .filter((val) => val.PaidContent == "yes")
              .sort(
                (dateA, dateB) => new Date(dateB.time) - new Date(dateA.time)
              )
              .map((val, i) => {
                return (
                  <div className="items" key={i}>
                    <div className="box shadow">
                      <div className="images">
                        <div className="h-48 img">
                          <img className="h-48" src={val.cover} alt="" />
                        </div>
                        <div class=" font-semibold text-xs pl-3 pt-2 ">
                          <span>{val.catgeory.catgeory}</span>
                        </div>
                      </div>
                      <Link to={`/SinglePage/${val.id}`}>
                        <div className="p-3 items-center  h-28">
                          <h1 className=" text-md  font-medium">{val.title}</h1>
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

export default Life;
