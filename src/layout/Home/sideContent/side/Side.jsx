import React, { useState, useEffect } from "react";
import axios from "axios";
import "./side.css";
import Slider from "react-slick";
import Heading from "../../../../components/CommonCss/heading/Heading";
// import { gallery } from "../../../../dummyData";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "./../social/social";

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetGallery",
      headers: {},
    }; // "https://newsapi.org/v2/top-headlines?country=se&apiKey=316513ab213c4f64a39e8cb9bd83f2af"
    axios(config)
      .then(function (response) {
        // setData([...response.data.articles]);
        setGallery([...response.data]);
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const catgeory = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />

      <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />

      <section className="catgorys">
        <Heading title="Catgeorys" />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
