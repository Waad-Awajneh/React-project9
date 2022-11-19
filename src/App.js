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
import HomepagesTest from "./HomepagesTest";
import Health from "./layout/Health";
import World from "./layout/World";
import Busness from "./layout/Busness";
import Sports from "./layout/Sports";
import Media from "./layout/Media";
import Style from "./layout/Style";
import Search from "./layout/Search";
import About from "./layout/About";
import Contact from "./layout/contact";
const App = () => {
  // console.log(ReferenceDataContext);
  // const data = useContext(ReferenceDataContext);
  // console.log(data);
  // console.log(isLoading);
  // const { search } = useContext(ReferenceDataContext);

  // if (search)
  //   return (
  //     <>
  //       <Header />
  //       <Search />
  //       <Footers />
  //     </>
  //   );

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepages />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/Style" element={<Style />} />
        <Route exact path="/Media" element={<Media />} />
        <Route exact path="/Sports" element={<Sports />} />
        <Route exact path="/Health" element={<Health />} />
        <Route exact path="/Busness" element={<Busness />} />
        <Route exact path="/World" element={<World />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/singlepage/:id" exact element={<SinglePage />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
      <Footers />
    </>
  );
};

export default App;
/**
 *
 *
 *
 *
 */
/**
 *    <Route exact path="/" element={<HomepagesTest />}>
          <Route exact index path="Home" element={<Homepages />} />
          <Route exact path="culture" element={<Culture />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />{" "}
        <Route path="/singlepage/:id" exact element={<SinglePage />} />
 */
