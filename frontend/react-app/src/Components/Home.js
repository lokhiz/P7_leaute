import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  async function userLogout(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      window.location.replace("http://localhost:3000/login");
      alert("Vous avez bien été déconnecté.");
      console.log("succès");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <>
      <div className="Home">
        <Link to={"/publish"} className="home-top-button">
          Publier
        </Link>
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post._id}>
              <div className="img-post-container">
                <img className="img-post" src={post.imageUrl} alt="" />
              </div>
              <div className="content-home">
                <Link className="link" to={`/post/${post._id}`}>
                  <h1 className="post-title">{post.title}</h1>
                  <p>{post.description}</p>
                </Link>
                <p>`{post.likes}` Likes</p>
                <p>`{post.dislikes}` Dislikes</p>
                <button className="readmore-button">Lire la suite</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link onClick={userLogout} className="disconnect-button">
        Déconnexion
      </Link>
    </>
  );
};

export default Home;
