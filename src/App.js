import React, {useState, useEffect} from "react";
import "./App.css";
import Posts from "./components/posts";
import New from "./components/new";
import ViewMessage from "./components/view-message";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);
    const res = await fetch("/posts");
    const data = await res.json();

    setPosts(data);
    setLoading(false);
  };

  const handleClick = async (id) => {
    try {
      setLoading(true);
      await fetch(`/posts/${id}`, {
        method: "DELETE",
      });
      getPosts();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddPost = async (newPost) => {
    try {
      setLoading(true);
      await fetch("/posts", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      getPosts();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await fetch(`/posts/${id}`, {
        method: "DELETE",
      });
      getPosts();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (editedPost) => {
    try {
      setLoading(true);
      console.log(editedPost);
      await fetch("/posts", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPost),
      });
      getPosts();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="App">
        <h4 style={{marginTop: "10rem"}}>Loading ...</h4>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/posts"
              render={(props) => <Posts posts={posts} />}
            />
            <Route
              exact
              path="/posts/new"
              render={(props) => <New handleAddPost={handleAddPost} />}
            />

            <Route
              path="/posts/:id"
              render={(props) => (
                <ViewMessage
                  {...props}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
