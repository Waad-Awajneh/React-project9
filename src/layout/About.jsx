import React from "react";
import Footers from "../components/CommonCss/footer/Footer";
import Header from "../components/CommonCss/header/Header";

const About = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <p className="font-normal text-sm leading-3 text-lnav hover:text-pcol cursor-pointer">
            About
          </p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-pcol lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
            We are here to make great design accessible and delightfull for
            everyone
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            varius hendrerit ipsum, sit amet bibendum dui congue sed. Praesent
            ac dapibus massa, sit amet lobortis augue. Morbi tincidunt commodo
            porta. Morbi eu lacus vel leo fringilla dictum. Cras euismod sem
            maximus tortor finibus ultricies. Maecenas eu nunc vel nisl congue
            suscipit quis a tortor. Etiam tristique varius urna, vitae viverra
            tellus consequat ac. Quisque non suscipit enim, sed pellentesque
            eros. Curabitur efficitur pharetra nisi scelerisque facilisis.
            Aliquam tempor efficitur quam, sit amet vulputate arcu fermentum
            vel. Mauris nec magna consectetur, mattis urna non, consequat mi.
            Mauris ullamcorper placerat erat non egestas.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/GvwJnvn/Group-736.png"
            alt="Group of people Chilling"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
            alt="Group of people Chilling"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
            alt="Group of people Chilling"
          />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-pcol">
              Our Story
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              varius hendrerit ipsum, sit amet bibendum dui congue sed. Praesent
              ac dapibus massa, sit amet lobortis augue. Morbi tincidunt commodo
              porta. Morbi eu lacus vel leo fringilla dictum. Cras euismod sem
              maximus tortor finibus ultricies. Maecenas eu nunc vel nisl congue
              suscipit quis a tortor. Etiam tristique varius urna, vitae viverra
              tellus consequat ac.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              varius hendrerit ipsum, sit amet bibendum dui congue sed. Praesent
              ac dapibus massa, sit amet lobortis augue. Morbi tincidunt commodo
              porta. Morbi eu lacus vel leo fringilla dictum. Cras euismod sem
              maximus tortor finibus ultricies. Maecenas eu nunc vel nisl congue
              suscipit quis a tortor.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img
              className="lg:block hidden w-full"
              src="https://i.ibb.co/2kxWpNm/Group-740.png"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
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
