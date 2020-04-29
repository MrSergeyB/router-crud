import React from "react";
import "./post.css";

const Post = (props) => {
  return (
    <div className="post-wrapper">
      <div className="header">
        <img
          className="avatar"
          src={require("../../assets/img/user1.png")}
          alt={props.author}
        />
        <h3 className="author">{props.author}PopoP</h3>
        <p className="time">{props.created}4 min</p>
      </div>
      <div className="message-box">
        <p>{props.message} fasfs</p>
      </div>
      <div className="fotter">
        <div>
          <span class="material-icons">thumb_up</span>
          <span>Нравится</span>
        </div>
        <div>
          <span class="material-icons">comment</span>
          <span>Комментировать</span>
        </div>
      </div>
      <div className="input-box">
        <input
          className="input"
          type="text"
          placeholder="Напишите комментарий..."
        />
      </div>
    </div>
  );
};

export default Post;
