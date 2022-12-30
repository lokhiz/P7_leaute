import axios from "axios";
import { useState } from "react";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: title,
      desc: desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        const res = await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts/", newPost);
      alert("Post publié");
      window.location.replace("http://localhost:3000/homepage");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="write">
      <div className="content-write">
        <input
          type="text"
          className="title-write"
          placeholder="Titre"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="editor-container">
          <input
            className="editor"
            placeholder="Description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="menu-write">
        <div className="item-write">
          <h2>Télécharger une image</h2>
          {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
          )}
          <input
            className="file-upload"
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="upload-button">
          Publier
        </button>
      </div>
    </form>
  );
};

export default Write;
