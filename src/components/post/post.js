import React from "react";
import "./post.css";
import {Link} from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className="post-wrapper">
      <div className="header">
        <img
          className="avatar"
          src={require("../../assets/img/user2.png")}
          alt={post.author}
        />
        <h3 className="author">{post.author}</h3>
        <p className="time">{post.created}</p>
        <Link
          to={`/posts/${post.id}`}
          className="btn btn-outline-warning btn-block my-1"
        >
          {" "}
          <span className="material-icons">keyboard_arrow_down</span>
        </Link>
      </div>
      <div className="message-box">
        <p>{post.content}</p>
      </div>
      <div className="fotter">
        <div>
          <span className="material-icons">thumb_up</span>
          <span>Нравится</span>
        </div>
        <div>
          <span className="material-icons">comment</span>
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
