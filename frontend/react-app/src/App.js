import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";
import { Home } from "./Components/Home/Home";

const App = () => {
  const [view, setView] = useState("Inscription");
  return (
    <Router>
      <div className="App">
        <nav>
          <Link
            className="register-button"
            onClick={() => setView("Inscription")}
            style={{ color: view === "Inscription" ? "#fff" : "" }}
          >
            Inscription
          </Link>
          <Link
            className="login-button"
            onClick={() => setView("Connexion")}
            style={{ color: view === "Connexion" ? "#fff" : "" }}
          >
            Connexion
          </Link>
        </nav>
        {view === "Inscription" ? <Register /> : <Login />}
      </div>
    </Router>
  );
};

export default App;
