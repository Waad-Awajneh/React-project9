import React from "react";
import Discover from "./../../Discover/Discover";
import Side from "../../sideContent/side/Side";
import Life from "../life/life";
import Music from "../music/music";
import Popular from "../popular/popular";
import Ppost from "../Ppost/Ppost";
import "./home.css";

const Homes = () => {
  return (
    <>
      <main>
        <div className="containers mx-5 ">
          <section className="mainContent">
            <Popular />
            <Ppost />
            <Music />
            <Life />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
