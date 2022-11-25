import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Hero.css";
import Card from "./Card";
import { ReferenceDataContext } from "../../../ReferenceDataContext/ReferenceDataContext";

const Hero = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading .......</div>;
  }
  return (
    <>
      <section className="hero">
        <div className="containers  mx-5">
          {items
            ?.filter((item, i) => i < 4)
            .sort((dateA, dateB) => new Date(dateB.time) - new Date(dateA.time))
            .map((item) => {
              return <Card key={item.id} item={item} />;
            })}
        </div>
      </section>
    </>
  );
};

export default Hero;
