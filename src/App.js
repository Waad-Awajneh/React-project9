import React, { useContext } from "react";

import "./App.css";

import Homepages from "./layout/Home/Homepages";
import Footers from "./components/CommonCss/footer/Footer";
import Header from "./components/CommonCss/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePage from "./layout/singlePage/singlePage";
import Culture from "./layout/culture/culture";
import { ReferenceDataContext } from "./ReferenceDataContext/ReferenceDataContext";
import Login from "./layout/login";
import SignUp from "./layout/signUp";
const App = () => {
  // console.log(ReferenceDataContext);
  // const data = useContext(ReferenceDataContext);
  // console.log(data);
  // console.log(isLoading);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepages />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/singlepage/:id" exact element={<SinglePage />} />
        <Route exact path="/culture" element={<Culture />} />
      </Routes>
      <Footers />
    </>
  );
};

export default App;
