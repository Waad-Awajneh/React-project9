// import React from "react";
import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=316513ab213c4f64a39e8cb9bd83f2af",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setData([response.data]);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
}

export default ApiProvider;

export const useApi = () => {
  return useContext(ApiContext);
};
