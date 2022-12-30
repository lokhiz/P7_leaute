import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "../Components/Posts";
import Disconnect from "./Disconnect";
import { useLocation } from "react-router";
import logo from "../assets/icon-left-font.png";

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

  return (
    <>
      <div className="Home">
        <Link to={"/homepage"}>
          <img src={logo} alt="Groupomania" className="logo" />
        </Link>
        <Link to={"/publish"} className="home-top-button">
          Publier
        </Link>
        <Posts posts={posts} />
      </div>
      <Disconnect />
    </>
  );
};

export default Home;
