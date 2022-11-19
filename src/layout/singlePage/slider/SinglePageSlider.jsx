import Slider from "react-slick";
// import { popular } from "../../../dummyData";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ReferenceDataContext } from "./../../../ReferenceDataContext/ReferenceDataContext";

// same code of popular and change some part
const SinglePageSlider = (props) => {
  // const [data, setData] = useState([]);
  const { data } = useContext(ReferenceDataContext);

  // useEffect(() => {
  //   const config = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/GetPopular",
  //     headers: {},
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       // setData([...response.data.articles]);
  //       setData([...response.data]);
  //       // console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  var settings = {
    dots: false,
    navs: true,
    swipeToSlide: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rows: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          rows: 1,
        },
      },
      {
        breakpoint: 943,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <>
      <section className="singlePopular my-9 ">
        <div className="content">
          <Slider {...settings}>
            {data
              .filter((val) => val.catgeory.catgeory === props.catgeory)
              .map((val) => {
                return (
                  <div className="items relative container">
                    <div className="box">
                      <div className="images gap-2 h-20 ">
                        <img src={val.cover} alt="" />
                        <div className="text text-center ml-2">
                          <h1 className="title text-center sm:text-md">
                            {val.title}
                          </h1>
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

export default SinglePageSlider;
