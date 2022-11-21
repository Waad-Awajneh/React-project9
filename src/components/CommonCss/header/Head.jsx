import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="mx-5 logo">
            <Link to={"/"}>
              <img src="../images/logo.png" alt="" />
            </Link>
          </div>
          <div className="ad">
            {/*<img src="../images/headerb.png" alt="" />*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
