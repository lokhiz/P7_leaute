import { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="write">
      <div className="content-write">
        <input type="text" className="title-write" placeholder="Titre" />
        <div className="editor-container">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu-write">
        <div className="item-write">
          <h2>Publier</h2>
          <input className='file-upload' type="file" id="file" name="" />
          <div className="buttons">
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
