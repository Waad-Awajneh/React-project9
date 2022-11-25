import axios from "axios";
import "./music.css";
import Slider from "react-slick";
import Heading from "../../../../components/CommonCss/heading/Heading";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import React, { useState, useEffect, useContext } from "react";
import { ReferenceDataContext } from "../../../../ReferenceDataContext/ReferenceDataContext";
import { Link } from "react-router-dom";

const Music = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <>
      <section className="music">
        <Heading title="Media" />
        <div className="content mx-5">
          <Slider {...settings}>
            {data
              .filter((val) => val.catgeory.catgeory === "Media")
              .sort(
                (dateA, dateB) => new Date(dateB.time) - new Date(dateA.time)
              )
              .map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow flex">
                      <div className="images w-56">
                        <div className="img w-56">
                          <img className="w-full" src={val.cover} alt="" />
                          {/*     <span>{val.catgeory}</span>*/}
                        </div>
                      </div>

                      <Link to={`/SinglePage/${val.id}`}>
                        <div className="text">
                          <h1 className="title  font-semibold my-1">
                            {val.title}
                          </h1>
                          <div className="date font-bold flex items-center text-sm px-2 mx-2">
                            <BsCalendar />
                            <label className=" m-2">{val.time}</label>
                          </div>
                          <p className="desc">{val.para1.slice(0, 250)}...</p>
                          <div className="comment gap-3 flex text-center items-center px-2">
                            <FaShareAlt />
                            <label className="m-2">Share </label>
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

export default Music;
