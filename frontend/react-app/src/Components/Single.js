import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";
import { useLocation } from "react-router";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";

const Single = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content-single">
        <div className="img-and-user">
          {post.photo && (
            <img
              src={PF + post.photo}
              alt="post"
              className="img-post"
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1>
              {title}
              {post.username === user?.username && (
                <div>
                  <img
                    className="icons"
                    src={Edit}
                    alt='edit icon'
                    onClick={() => setUpdateMode(true)}
                  />
                  <img className="icons" src={Delete} alt='delete icon' onClick={handleDelete} />
                </div>
              )}
            </h1>
          )}
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;