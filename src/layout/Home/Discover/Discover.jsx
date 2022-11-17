import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/Card";
import { useApi } from "../../../Api";

// import { discover } from "../../../dummyData";

import Heading from "../../../components/CommonCss/heading/Heading";
import "./style.css";

const Discover = () => {
  // const { data } = useApi();
  // console.log(data);

  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/Getdescover",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setData([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="discover">
      <div className="container">
        <Heading title="Discover" />
        <div className="content">
          {data.map((val) => {
            {
              console.log(val.title);
            }
            return (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h1 className="title">{val.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Discover;

/**
 *      <section className="discover">
        <div className="container">
          <Heading title="Discover" />
          <div className="content">
            {data.map((val) => {
              {
                console.log(val.title);
              }
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.urlToImage} alt="" />
                  </div>
                  <h1 className="title">{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 */
/**
 *  <div className="content flex  warp">
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              {data.map((val) => {
                {
                  console.log(val.title);
                }
                return (
                  <>
                    <img
                      alt="Office"
                      src={val.urlToImage}
                      class="h-56 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                      <time
                        datetime="2022-10-10"
                        class="block text-xs text-gray-500"
                      >
                        {val.publishedAt}
                      </time>

                      <a href="#">
                        <h3 class="mt-0.5 text-lg text-gray-900">
                          {val.title}
                        </h3>
                      </a>
                    </div>
                  </>
                );
              })}
            </article>
          </div>
 */
