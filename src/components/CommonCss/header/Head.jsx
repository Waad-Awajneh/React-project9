import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="m-3 logo w-52">
            <Link to={"/"}>
              <img className="w-full" src="../images/logo.png" alt="" />
            </Link>
          </div>
          <div className="ad"></div>
        </div>
      </section>
    </>
  );
};

export default Head;
