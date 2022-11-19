import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { HiSaveAs } from "react-icons/hi";
import { Link } from "react-router-dom";

function Card(props) {
  const cardInfo = props.data;
  return (
    <>
      <Link to={`/SinglePage/${cardInfo.id}`}>
        <div className="my-2 bg-white dark:bg-[#18191c] shadow-xl hover:shadow  h-96">
          <div className="relative w-full h-72 ">
            <img
              className="rounded-lg hover:scale-100 w-full duration-300 h-full"
              src={cardInfo.cover}
              alt={cardInfo.title}
            />
            <div className="absolute bottom-3 left-4 flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit duration-200 group">
                <HiSaveAs className="text-sm text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-wrap">
            <h3 className="text-primary dark:text-white font-medium text-l">
              {cardInfo.title}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
