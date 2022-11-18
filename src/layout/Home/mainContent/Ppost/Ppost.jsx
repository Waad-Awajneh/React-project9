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

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const config = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/GetPpost",
  //     headers: {},
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       setData([...response.data]);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    // responsive: [
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       // rows: 4,
    //     },
    //   },
    // ],
  };
  // console.log(data);
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
              .map((val, i) => {
                return (
                  <div className="items" key={i}>
                    <div className="box shadow">
                      <div className="images">
                        <div className="img  h-96">
                          <img src={val.cover} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{val.catgeory.catgeory}</span>
                        </div>
                      </div>
                      <Link to={`/SinglePage/${val.id}`}>
                        <div className="text">
                          <h1 className="title">{val.title}</h1>
                          <div className="date flex  items-center px-3">
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

export default Ppost;
