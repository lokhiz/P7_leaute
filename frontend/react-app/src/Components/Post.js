import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";
import axios from "axios";
import Context from "../Context/Context";

export default function Post({ post }) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeButton, setActiveButton] = useState("none");
  const { user } = useContext(Context);

  const handleLikeButton = async () => {
    if (activeButton === "none") {
      try {
        setLikeCount(likeCount + 1);
        setActiveButton("like");
        await axios.post(`http://localhost:5000/api/posts/${post._id}/like`, {
          postId: post._id,
          usersLiked: user._id,
          like: likeCount,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (activeButton === "like") {
      try {
        setLikeCount(likeCount - 1);
        setActiveButton("none");
        await axios.post(`http://localhost:5000/api/posts/${post._id}/like`, {
          usersLiked: user._id,
          like: likeCount,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (activeButton === "dislike") {
      try {
        await axios.post(`http://localhost:5000/api/posts/${post._id}/like`, {
          usersLiked: user._id,
          like: likeCount,
          dislike: dislikeCount,
        });
        setLikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        setActiveButton("like");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDislikeButton = async () => {
    if (activeButton === "none") {
      try {
        await axios.post(`http://localhost:5000/api/posts/${post._id}/like`, {
          usersDisliked: user._id,
          dislike: dislikeCount,
        });
        setDislikeCount(dislikeCount + 1);
        setActiveButton("dislike");
      } catch (error) {
        console.log(error);
      }
    }

    if (activeButton === "dislike") {
      try {
        await axios.post(`http://localhost:5000/api/posts/${post._id}/like`, {
          usersDisliked: user._id,
          dislike: dislikeCount,
        });
        setDislikeCount(dislikeCount - 1);
        setActiveButton("none");
      } catch (error) {
        console.log(error);
      }
    }

    if (activeButton === "like") {
      try {
        await axios.post(`http://localhost:5000/api/posts/${post._id}/like`, {
          usersDisliked: user._id,
          like: likeCount.like,
          dislike: dislikeCount,
        });
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveButton("dislike");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const PF = "http://localhost:5000/images/";
  return (
    <div>
      <div className="post">
        {post.photo && (
          <img className="postImg" src={PF + post.photo} alt="post" />
        )}
        <div className="postInfo">
          <Link to={`/post/${post._id}`} className="link">
            <h1 className="postTitle">{post.title}</h1>
          </Link>
          <p className="postDesc">{post.desc}</p>
        </div>
      </div>
      <div className="thumbs-flex">
        <button
          onClick={handleLikeButton}
          className={`btn ${activeButton === "like" ? "like-active" : ""}`}
        >
          {likeCount}
          <img src={Like} alt="like" className="thumbs" />
        </button>
        <button
          onClick={handleDislikeButton}
          className={`btn ${
            activeButton === "dislike" ? "dislike-active" : ""
          }`}
        >
          {dislikeCount}
          <img src={Dislike} alt="dislike" className="thumbs" />
        </button>
      </div>
    </div>
  );
}
