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
        <div className="container mx-2">
          {items
            ?.filter((item, i) => i < 4)
            .map((item) => {
              return <Card key={item.id} item={item} />;
            })}
        </div>
      </section>
    </>
  );
};

export default Hero;
