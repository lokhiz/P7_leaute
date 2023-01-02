import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
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
  );
}
