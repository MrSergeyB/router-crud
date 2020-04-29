import React, {useState, useEffect} from "react";
import "./view-message.css";

const ViewMessage = ({id}) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setLoading(true);
    const res = await fetch("/posts/:id");
    const data = await res.json();

    setPost(data);
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
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
        </div>
        <div className="message-box">
          <p>{post.content}</p>
        </div>
        <div className="fotter">
          <div>
            <button className="edit-btn">Изменить</button>
          </div>
          <div>
            <button className="delete-btn">Удалить</button>
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
  }
};

export default ViewMessage;
