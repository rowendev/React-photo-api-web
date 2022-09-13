import React from "react";

const Picture = (props) => {
  return (
    <div className="picture">
      <p>{props.author}</p>
      <div className="picture-container">
        <a target="_blank" href={props.downloadLink}>
          <img src={props.url} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Picture;
