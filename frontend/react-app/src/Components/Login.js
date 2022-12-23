import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  axios.defaults.withCredentials = true;

  async function getUserData(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("auth", true);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      alert("Une erreur est survenue.");
    }
  }

  return (
    <>
      {success ? (
        <Navigate to="/homepage" replace />
      ) : (
        <form className="Form" onSubmit={getUserData}>
          <h1 className="form-title">Connexion</h1>
          <input
            type="text"
            name="email"
            placeholder="Email :"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe :"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="submit-button">
            Connexion
          </button>
        </form>
      )}
    </>
  );
}

export default Login;
