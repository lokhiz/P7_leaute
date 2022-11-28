import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo nulla, neque, mollitia aliquam dolorum modi maiores repellendus ad quod dolore doloribus culpa, optio iusto maxime! Sapiente quasi nihil officia non reiciendis obcaecati consequuntur, eius laudantium facilis voluptates. Corrupti facilis dolorem blanditiis repudiandae rerum voluptatum nostrum tenetur nisi mollitia ut?",
      img: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo nulla, neque, mollitia aliquam dolorum modi maiores repellendus ad quod dolore doloribus culpa, optio iusto maxime! Sapiente quasi nihil officia non reiciendis obcaecati consequuntur, eius laudantium facilis voluptates. Corrupti facilis dolorem blanditiis repudiandae rerum voluptatum nostrum tenetur nisi mollitia ut?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo nulla, neque, mollitia aliquam dolorum modi maiores repellendus ad quod dolore doloribus culpa, optio iusto maxime! Sapiente quasi nihil officia non reiciendis obcaecati consequuntur, eius laudantium facilis voluptates. Corrupti facilis dolorem blanditiis repudiandae rerum voluptatum nostrum tenetur nisi mollitia ut?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
  ];

  async function userLogout(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      window.location.replace('http://localhost:3000/login')
      alert('Vous avez bien été déconnecté.')
      console.log('succès');
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
            <div className="post" key={post.id}>
              <div className="img-post-container">
                <img className="img-post" src={post.img} alt="" />
              </div>
              <div className="content-home">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1 className="post-title">{post.title}</h1>
                  <p>{post.desc}</p>
                </Link>
                <button className="readmore-button">Lire la suite</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to={"/login"} onClick={userLogout} className="disconnect-button">
        Déconnexion
      </Link>
    </>
  );
};

export default Home;
