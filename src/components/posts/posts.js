import React from "react";
import "./posts.css";
import Post from "../post";

const Posts = () => {
  return (
    <div className="container">
      <div className="btn-box">
        <a className="btn" href="!#">
          Создать пост
        </a>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Posts;
