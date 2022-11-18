import React from "react";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <section className="social">
        <div className="socBox flex gap-1 items-center">
          <FaFacebookF />
          <span>12,740 Likes</span>
        </div>
        <div className="socBox flex gap-1 items-center">
          <AiFillYoutube />
          <span>2,700 Subscriber</span>
        </div>
        <div className="socBox flex gap-1 items-center">
          <AiFillTwitterCircle />
          <span>8,700 Followers</span>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
