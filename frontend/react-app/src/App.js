import "./index.css";
import {
  Link,
  Outlet,
} from "react-router-dom";
import logo from "./assets/icon-left-font.png";


const App = () => {
  return (
    <>
      <div className="App">
          <img src={logo} alt="Groupomania" className="logo" />
        <Link to={"/register"} className="top-buttons">
          Inscription
        </Link>
        <Link to={"/login"} className="top-buttons">
          Connexion
        </Link>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default App;
