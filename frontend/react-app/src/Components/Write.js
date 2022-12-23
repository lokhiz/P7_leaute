import axios from "axios";
import { useState } from "react";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: title,
      description: description,
    };
    if (file) {
      const data = FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/images", data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts/", newPost);
      window.location.replace("post/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
    alert("Votre post a été bien publié.");
  }

  return (
    <form onSubmit={handleSubmit} className="write">
      <div className="content-write">
        <input
          type="text"
          className="title-write"
          placeholder="Titre"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="editor-container">
          <input
            className="editor"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="menu-write">
        <div className="item-write">
          <h2>Télécharger une image</h2>
          <input
            className="file-upload"
            type="file"
            name="file"
            value={file}
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
