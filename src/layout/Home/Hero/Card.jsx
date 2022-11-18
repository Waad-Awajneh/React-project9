import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={props.item.cover} alt="" />
        </div>
        <div className="text">
          <span className="category">{props.item.catgeory.catgeory}</span>
          <Link to={`/SinglePage/${props.item.id}`}>
            <h1 className="titleBg">{props.item.title}</h1>
          </Link>
          <div className="author flex">
            <span>by {props.item.authorName}</span>
            <span>{props.item.time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
