import { Avatar } from "@material-ui/core";
import React from "react";
import "./Friend.css";

function Friend({ name, avatar }) {
  return (
    <div className="friend">
      <Avatar src={avatar} />
      <h5>{name}</h5>
    </div>
  );
}

export default Friend;
