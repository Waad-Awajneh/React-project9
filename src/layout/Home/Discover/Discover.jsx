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
    }; // "https://newsapi.org/v2/top-headlines?country=se&apiKey=316513ab213c4f64a39e8cb9bd83f2af"
    axios(config)
      .then(function (response) {
        // setData([...response.data.articles]);
        setData([...response.data]);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    // <>
    //   <section>
    //     <div>
    //       <Heading title="Discover" />
    //       <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
    //         {data.map((val, i) => (
    //           <Card key={i} cards={val} />
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </>

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
