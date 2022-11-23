import { Link } from "react-router-dom";

export const Home = () => {
  const posts = [
    {
      id: 61511643543514351,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam?',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo nulla, neque, mollitia aliquam dolorum modi maiores repellendus ad quod dolore doloribus culpa, optio iusto maxime! Sapiente quasi nihil officia non reiciendis obcaecati consequuntur, eius laudantium facilis voluptates. Corrupti facilis dolorem blanditiis repudiandae rerum voluptatum nostrum tenetur nisi mollitia ut?',
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
  ];
  return (
    <>
      <div className="Home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img-post">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1 className="post-title">{post.title}</h1>
                  <p>{post.desc}</p>
                  <button>Lire la suite</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to={"/login"} className="disconnect-button">
        Déconnexion
      </Link>
    </>
  );
};

export default Home;
