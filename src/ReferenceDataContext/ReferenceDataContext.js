import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ReferenceDataContext = createContext([]);

const ReferenceDataContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [catgeory, setCatgeory] = useState([]);
  const [adv, setAdv] = useState([]);
  // const [search, setSearch] = useState(false);
  const [tosearch, setToSearch] = useState("");
  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/GetHero",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setdata(response.data.data);
        setIsloading(false);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/Getcatgeory",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setCatgeory([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/Getdescover",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setAdv([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ReferenceDataContext.Provider
      value={{
        data,
        isLoading,
        adv,
        catgeory,
      }}
    >
      {children}
    </ReferenceDataContext.Provider>
  );
};

export default ReferenceDataContextProvider;
