import React, {useState, useEffect} from "react";
import "./view-message.css";
import {useHistory} from "react-router-dom";

const ViewMessage = ({match, handleDelete, handleEdit}) => {
  let history = useHistory();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedPost, setEditedPost] = useState("");

  useEffect(() => {
    getPost(match.params.id);

    //eslin-ignore-next-line
  }, [match.params.id]);

  const getPost = async (id) => {
    setLoading(true);
    const res = await fetch(`/posts/${id}`);
    const data = await res.json();

    setPost(data);
    setLoading(false);
  };

  const handleClickDelete = async (id) => {
    handleDelete(id);
    history.push("/posts");
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
          {editMode ? (
            <input
              className="input"
              type="text"
              value={editedPost}
              onChange={(e) => setEditedPost(e.target.value)}
            />
          ) : (
            <p>{post.content}</p>
          )}
        </div>
        <div className="fotter">
          <div>
            {editMode ? (
              <button
                onClick={() => handleEdit(editedPost)}
                className="edit-btn"
              >
                Сохранить
              </button>
            ) : (
              <button
                onClick={() => setEditMode(!editMode)}
                className="edit-btn"
              >
                Изменить
              </button>
            )}
          </div>
          <div>
            <button
              onClick={() => handleClickDelete(match.params.id)}
              className="delete-btn"
            >
              Удалить
            </button>
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
