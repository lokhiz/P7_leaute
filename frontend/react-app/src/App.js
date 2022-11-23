import "./index.css";
import { Link, Outlet } from "react-router-dom";
import logo from "./assets/icon-left-font.png";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="header">
          <Link to={'/homepage'} >
            <img src={logo} alt="Groupomania" className="logo" />
          </Link>
          <Link to={"/register"} className="top-buttons">
            Inscription
          </Link>
          <Link to={"/login"} className="top-buttons">
            Connexion
          </Link>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default App;
