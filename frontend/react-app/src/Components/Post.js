import { Link } from "react-router-dom";
import { useState } from "react";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";

export default function Post({ post }) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeButton, setActiveButton] = useState("none");

  const handleLikeButton = () => {
    if (activeButton === "none") {
      setLikeCount(likeCount + 1);
      setActiveButton("like");
      return;
    }

    if (activeButton === "like") {
      setLikeCount(likeCount - 1);
      setActiveButton("none");
      return;
    }

    if (activeButton === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveButton("like");
    }
  };

  const handleDislikeButton = () => {
    if (activeButton === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveButton("dislike");
      return;
    }

    if (activeButton === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveButton("none");
      return;
    }

    if (activeButton === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveButton("dislike");
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
