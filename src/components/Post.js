import { Avatar } from "@material-ui/core";
import { ChatBubbleOutline, NearMe, ThumbUp } from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ profileImg, image, name, time, message }) {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={profileImg} className="post__avatar" />
        <div className="post__info--plus">
          <h3>{name}</h3>
          <p>{new Date(time?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__mess">
        <p>{message}</p>
      </div>
      {!image ? (
        ""
      ) : (
        <div className="post__img">
          <img src={image} />
        </div>
      )}
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
