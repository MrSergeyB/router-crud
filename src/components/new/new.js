import React from "react";
import "./new.css";

const New = () => {
  return (
    <div>
      <div className="delete-button-box">
        <a href="!#" className="delete-btn">
          x
        </a>
      </div>
      <div className="input-message-box">
        <img src={require("../../assets/img/user3.png")} alt="user" />
        <input type="text" />
      </div>
      <div className="post-box">
        <a href="!#" className="post-btn">
          Опубликовать
        </a>
      </div>
    </div>
  );
};

export default New;
