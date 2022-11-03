import "./index.css";
import { useState } from "react";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";

const App = () => {
  const [view, setView] = useState("Inscription");
  return (
    <div className="App">
      <nav>
        <h3
          className="register-button"
          onClick={() => setView("Inscription")}
          style={{ color: view === "Inscription" ? "#fff" : "" }}
        >
          Inscription
        </h3>
        <h3
          className="login-button"
          onClick={() => setView("Connexion")}
          style={{ color: view === "Connexion" ? "#fff" : "" }}
        >
          Connexion
        </h3>
      </nav>
        {view === "Inscription" ? <Register /> : <Login />}
    </div>
  );
};

export default App;