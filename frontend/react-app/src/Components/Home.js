import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "../Components/Posts";
import { useLocation } from "react-router";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts" + search);
        setPosts(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchPosts();
  }, [search]);

  async function userLogout(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      window.location.replace("http://localhost:3000/login");
      alert("Vous avez bien été déconnecté.");
      localStorage.setItem("auth", false);
    } catch (error) {
      alert("Une erreur est survenue.");
      console.log(error);
    }
  }

  return (
    <>
      <div className="Home">
        <Link to={"/publish"} className="home-top-button">
          Publier
        </Link>
        <Posts posts={posts} />
      </div>
      <Link onClick={userLogout} className="disconnect-button">
        Déconnexion
      </Link>
    </>
  );
};

export default Home;
