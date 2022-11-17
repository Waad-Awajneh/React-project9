import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import Card from "./Card";

const Hero = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetHero",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setItems(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items?.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
