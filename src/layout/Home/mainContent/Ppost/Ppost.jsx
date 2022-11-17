import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { FcCalendar } from "react-icons/fc";

import Heading from "../../../../components/CommonCss/heading/Heading";
import axios from "axios";
import "./ppost.css";

const Ppost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetPpost",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setData([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="popularPost">
        <Heading title="Popular Posts" />
        <div className="content">
          <Slider {...settings}>
            {data.map((val, i) => {
              console.log(val.cover);
              return (
                <div className="items">
                  <div className="box shadow">
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
                      <div className="date flex  items-center px-3">
                        <FcCalendar />

                        <label>{val.date}</label>
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
