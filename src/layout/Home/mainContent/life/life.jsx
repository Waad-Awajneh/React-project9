import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
// import { lifestyle } from "../../../../dummyData";
import Heading from "../../../../components/CommonCss/heading/Heading";

import "../Ppost/ppost.css";
//copy ppost code
const Life = () => {
  const [lifestyle, setLifestyle] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetLifestyle",
      headers: {},
    }; // "https://newsapi.org/v2/top-headlines?country=se&apiKey=316513ab213c4f64a39e8cb9bd83f2af"
    axios(config)
      .then(function (response) {
        // setData([...response.data.articles]);
        setLifestyle([...response.data]);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
        <Heading title="Life Style" />
        <div className="content">
          <Slider {...settings}>
            {lifestyle.map((val) => {
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
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
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

export default Life;
