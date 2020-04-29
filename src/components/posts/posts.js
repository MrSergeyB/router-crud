import React from "react";
import "./posts.css";
import Post from "../post";
import {Link} from "react-router-dom";

const Posts = ({posts}) => {
  return (
    <div className="container">
      <div className="btn-box">
        <Link to="/posts/new" className="btn-add">
          Создать пост
        </Link>
      </div>
      <div>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
