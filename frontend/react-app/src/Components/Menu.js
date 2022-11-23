import { Link } from "react-router-dom";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo nulla, neque, mollitia aliquam dolorum modi maiores repellendus ad quod dolore doloribus culpa, optio iusto maxime! Sapiente quasi nihil officia non reiciendis obcaecati consequuntur, eius laudantium facilis voluptates. Corrupti facilis dolorem blanditiis repudiandae rerum voluptatum nostrum tenetur nisi mollitia ut?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
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

  return (
    <div className="menu">
      <h1 className="post-menu-title">
        Autres posts qui pourraient vous intéresser
      </h1>
      {posts.map((post) => (
        <div className="post-menu" key={post.id}>
          <img className="img-post-menu" src={post.img} alt="" />
          <h2>{post.title}</h2>
          <Link className="readmore-button" to={`/post/${post.id}`}>
            Lire la suite
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
