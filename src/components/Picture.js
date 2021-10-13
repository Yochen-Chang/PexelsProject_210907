import React from "react";
import "../styles/style.css";

const Pictures = ({ data }) => {
  return (
    <div className="picture">
      <p className="photographer">{data.photographer}</p>
      <div className="imgContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download the picture:{" "}
        <a target="_blank" href={data.src.large}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Pictures;
