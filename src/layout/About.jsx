import React from "react";
import Footers from "../components/CommonCss/footer/Footer";
import Header from "../components/CommonCss/header/Header";

const About = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <p className="font-normal text-sm leading-3 text-black hover:text-lnav cursor-pointer">
            About
          </p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-black lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
            About Discussion
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            We are journalists, designers and technologists, united by a mission
            to inform, engage and empower the world. We bear witness to history
            as it unfolds and explain not just what happened, but why, and what
            it means to you. Our products and platforms take you to the farthest
            corners of the world, and they bring the world to you, delivering
            content and services that enrich your lives, your families and your
            communities. We are available on more screens in more places than
            any other news source. We stand for excellence in our journalism and
            our products. We are committed to serving you.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://th.bing.com/th/id/R.2c449adb7d705997cf038c726cbb8bc6?rik=N%2byUb5bhUjRu7w&pid=ImgRaw&r=0"
            alt="Group of people Chilling"
          />
          <img
            className="sm:hidden block w-full"
            src="https://th.bing.com/th/id/R.2c449adb7d705997cf038c726cbb8bc6?rik=N%2byUb5bhUjRu7w&pid=ImgRaw&r=0"
            alt="Group of people Chilling"
          />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-black">
              Our Story
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              We are journalists, designers and technologists, united by a
              mission to inform, engage and empower the world. We bear witness
              to history as it unfolds and explain not just what happened, but
              why, and what it means to you. Our products and platforms take you
              to the farthest corners of the world, and they bring the world to
              you, delivering content and services that enrich your lives, your
              families and your communities. We are available on more screens in
              more places than any other news source. We stand for excellence in
              our journalism and our products. We are committed to serving you.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6"></p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img
              className="lg:block hidden w-full"
              src="https://i.ibb.co/2kxWpNm/Group-740.png"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src="https://th.bing.com/th/id/R.2c449adb7d705997cf038c726cbb8bc6?rik=N%2byUb5bhUjRu7w&pid=ImgRaw&r=0"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/9g2R7Xr/Group-803.png"
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
