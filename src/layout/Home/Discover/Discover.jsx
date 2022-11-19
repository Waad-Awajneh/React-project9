import { Link } from "react-router-dom";
import { ReferenceDataContext } from "../../../ReferenceDataContext/ReferenceDataContext";
import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import Card from "../../../components/Card";
import { useApi } from "../../../Api";

// import { discover } from "../../../dummyData";

import Heading from "../../../components/CommonCss/heading/Heading";
import "./style.css";

const Discover = () => {
  const { catgeory, isLoading } = useContext(ReferenceDataContext);

  // const { data } = useApi();
  // console.log(data);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const config = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/Getdescover",
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

  if (isLoading) {
    return <div>Loading .......</div>;
  }
  return (
    <section className="discover">
      <div className="container">
        <Heading title="Discover" />
        <div className="content">
          {catgeory.map((val) => {
            return (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
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
