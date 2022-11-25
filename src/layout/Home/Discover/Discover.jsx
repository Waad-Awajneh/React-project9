import { Link } from "react-router-dom";
import { ReferenceDataContext } from "../../../ReferenceDataContext/ReferenceDataContext";
import React, { useContext } from "react";

import Heading from "../../../components/CommonCss/heading/Heading";
import "./style.css";

const Discover = () => {
  const { catgeory, isLoading } = useContext(ReferenceDataContext);

  if (isLoading) {
    return <div>Loading .......</div>;
  }
  return (
    <section className="discover">
      <div className=" w-3/4 mx-5">
        <Heading title="Discover" />
        <div className="content">
          {catgeory.map((val) => {
            return (
              <div className="box">
                <div className="img">
                  <img className="w-full" src={val.cover} alt="" />
                </div>
                <Link to={`/${val.catgeory}`}>
                  <h1 className="title">{val.catgeory}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Discover;
