import React, {useState} from "react";
import "./new.css";
import {Link, useHistory} from "react-router-dom";
import {v1 as uuidv1} from "uuid";
uuidv1();

const New = ({handleAddPost}) => {
  let history = useHistory();
  const [newPost, setNewPost] = useState("");

  const addNewPost = () => {
    if (newPost.trim()) {
      let newData = {
        id: uuidv1(),
        content: newPost,
        created: `${new Date().getMinutes()} минуты назад`,
        author: "UserNew",
      };

      handleAddPost(newData);

      setNewPost("");
      history.push("/posts");
    } else {
      alert("Should not be empty");
    }
  };

  return (
    <div className="new-post-box">
      <div className="delete-button-box">
        <Link to="/posts" className="delete-btn">
          X
        </Link>
      </div>
      <div className="input-message-box">
        <img
          className="avatar"
          src={require("../../assets/img/user3.png")}
          alt="user"
        />
        <input
          className="input"
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
      </div>
      <div className="post-box">
        <button className="post-btn" onClick={addNewPost}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};

export default New;
