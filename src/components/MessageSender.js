import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const [status, setStatus] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: status,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      image: imageURL,
      profileImg: user.photoURL,
      name: user.displayName,
    });

    setStatus("");
    setImageURL("");
  };
  return (
    <div className="sender">
      <div className="sender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={status} //reset input
            onChange={(e) => setStatus(e.target.value)}
            className="sender__input"
            placeholder="Bạn đang nghĩ gì?"
          />
          <input
            value={imageURL} //reset input
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Có thể nhập thêm URL ảnh!"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden
          </button>
        </form>
      </div>
      <div className="sender__options">
        <div className="sender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="sender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="sender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
