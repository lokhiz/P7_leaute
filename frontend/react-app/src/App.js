import "./index.css";
import {
  Link,
  Outlet,
} from "react-router-dom";

const App = () => {

  return (
    <>
      <div className="App">
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
