import React, { useState, useEffect } from "react";
import axios from "axios";
// import { tpost } from "../../../../dummyData";
import Heading from "../../../../components/CommonCss/heading/Heading";
import "./tpost.css";

const Tpost = () => {
  const [tpost, setTpost] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetPopular",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        // setData([...response.data.articles]);
        setTpost([...response.data]);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="tpost">
        <Heading title="Tiktok post" />
        {tpost.map((val) => {
          return (
            <div className="box flexSB">
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1 className="title">{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;
