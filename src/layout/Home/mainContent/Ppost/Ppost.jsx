import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import { ppost } from "../../../../dummyData";

import Heading from "../../../../components/CommonCss/heading/Heading";
import axios from "axios";
import "./ppost.css";

// copy same code of popular
const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetPpost",
      headers: {},
    }; // "https://newsapi.org/v2/top-headlines?country=se&apiKey=316513ab213c4f64a39e8cb9bd83f2af"
    axios(config)
      .then(function (response) {
        // setData([...response.data.articles]);
        setData([...response.data]);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="popularPost">
        <Heading title="Popular Posts" />
        <div className="content">
          <Slider {...settings}>
            {data.map((val) => {
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

export default Ppost;
