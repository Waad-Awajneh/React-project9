import React, { useState } from "react";

export default function Modal() {
  const [show, setshow] = useState(true);

  return (
    <>
      <div className="py-12 px-4">
        <div
          id="button"
          className={`${
            show ? "hidden" : "flex"
          } container mx-auto justify-center items-center px-4 md:px-10 py-20`}
        >
          <button
            onClick={() => setshow(true)}
            className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
          >
            Open Modal
          </button>
        </div>
        <div
          id="modal"
          className={`${
            show ? "flex" : "hidden"
          } lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-[#4C4C4C]  md:px-6 px-4  lg:py-24 md:py-12 py-9 relative`}
        >
          <div className="bg-white lg:px-10 md:px-6 px-4 py-10 relative">
            <svg
              onClick={() => setshow(false)}
              className="cursor-pointer right-4 top-4 absolute"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                fill="#1F2937"
              />
            </svg>
            <p className="text-gray-800 font-semibold text-center tracking-wide text-base pt-8">
              Subscribes to Our Newsletter to Receive Regular Updates And
              Exclusive Previews
            </p>
            <div className="md:flex block justify-center gap-8 pt-8">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/bag.png"
                  alt="bag"
                  className="w-full"
                />
                <div className="flex gap-4 items-center pt-4">
                  <input
                    type="checkbox"
                    name
                    id
                    className="h-4 w-4 cursor-pointer accent-gray-800"
                  />
                  <p className="text-sm font-medium leading-none text-gray-600">
                    Fashion Newsletter
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/frowk.png"
                  alt="frock"
                  className="w-full md:pt-0 pt-8"
                />
                <div className="flex gap-4 items-center pt-4">
                  <input
                    type="checkbox"
                    name
                    id
                    className="h-4 w-4 cursor-pointer accent-gray-800"
                  />
                  <p className="text-sm font-medium leading-none text-gray-600">
                    Kids Newsletter
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/curl.png"
                  alt="curl"
                  className="w-full md:pt-0 pt-8"
                />
                <div className="flex gap-4 items-center pt-4">
                  <input
                    type="checkbox"
                    name
                    id
                    className="h-4 w-4 cursor-pointer accent-gray-800"
                  />
                  <p className="text-sm font-medium leading-none text-gray-600">
                    Men’s Newsletter
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-10 w-full">
              <input
                type="Email"
                name
                id
                placeholder="Enter Your Email"
                className="border border-gray-300 focus:outline-none lg:max-w-[405px] h-[48px] w-full px-4 py-3"
              />
            </div>
            <div className="text-center pt-4 w-full">
              <button className="bg-gray-800 text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-600 duration-200 md:mt-0 mt-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
