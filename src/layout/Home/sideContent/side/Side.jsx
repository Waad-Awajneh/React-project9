import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./side.css";
import Slider from "react-slick";
import Heading from "../../../../components/CommonCss/heading/Heading";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "./../social/social";
import { ReferenceDataContext } from "../../../../ReferenceDataContext/ReferenceDataContext";

const Side = () => {
  const { data, isLoading, adv, catgeory } = useContext(ReferenceDataContext);
  // const [data,setdata]
  //   useEffect(() => {
  //     setItems(data);
  //   }, [data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isLoading) {
    return <div>Loading .......</div>;
  }
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
      <section className="banner lg:block md:flex gap-1">
        {/* <img src="./images/sidebar-banner-new.jpg" alt="" />*/}
        {adv.map((val) => (
          <img src={val.cover} alt="" />
        ))}
      </section>
      {/*     <Tpost />*/}
      <section className="catgorys">
        <Heading title="Catgeorys" />

        {catgeory.map((val) => {
          return (
            <Link to={`/${val.catgeory}`}>
              <div className="catgeory category1">
                <span>{val.catgeory}</span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {data.map((val) => {
            if (val.catgeory.catgeory == "Style")
              return (
                <div className="img">
                  <img src={val.cover} alt="" />

                  <Link to={`/SinglePage/${val.id}`}>
                    <div className="p-3 items-center">
                      <h1 className=" text-md  font-medium">{val.title}</h1>
                    </div>
                  </Link>
                </div>
              );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
