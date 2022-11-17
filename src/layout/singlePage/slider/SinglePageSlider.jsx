import Slider from "react-slick";
// import { popular } from "../../../dummyData";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

// same code of popular and change some part
const SinglePageSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetPopular",
      headers: {},
    };
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

  //change
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="singlePopular">
        <div className="content">
          <Slider {...settings}>
            {data.map((val) => {
              return (
                <div className="items">
                  <div className="box">
                    <div className="images">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h1 className="title">{val.title}</h1>
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

export default SinglePageSlider;
