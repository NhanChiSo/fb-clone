import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div className="story">
      <div
        className="story__Img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
      <div className="story__layout"></div>
    </div>
  );
}

export default Story;
