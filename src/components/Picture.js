import React from "react";
import PictureCard from "./PictureCard";

const Picture = (props) => {
  return (
    <div className="picture">
      <p>{props.author}</p>
      <div className="picture-container">
        <a target="_blank" href={props.downloadLink} rel="noreferrer">
          <img src={props.url} alt="" />
        </a>
        <PictureCard />
      </div>
    </div>
  );
};

export default Picture;
