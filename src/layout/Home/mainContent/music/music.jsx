import React, { useState, useEffect } from "react";
import axios from "axios";
import "./music.css";
import Slider from "react-slick";
import Heading from "../../../../components/CommonCss/heading/Heading";
// import { popular } from "../../../../dummyData";

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetPopular",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        // setData([...response.data.articles]);
        setMusic([...response.data]);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
        <Heading title="Music News" />
        <div className="content">
          <Slider {...settings}>
            {music
              .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow flexSB">
                      <div className="images">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                        <div className="date">
                          <i class="fas fa-calendar-days"></i>
                          <label>{val.date}</label>
                        </div>
                        <p className="desc">{val.desc.slice(0, 250)}...</p>
                        <div className="comment">
                          <i class="fas fa-share"></i>
                          <label>Share / </label>
                          <i class="fas fa-comments"></i>
                          <label>{val.comments}</label>
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

export default Music;
