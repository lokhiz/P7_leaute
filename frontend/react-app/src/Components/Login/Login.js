import "./Login.css";
import axios from "axios";
import logo from "../../assets/icon-left-font.png";
import { useState } from "react";
import { Router, Link, Navigate } from "react-router-dom";
import Home from "../Home/Home";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  async function getUserData(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {success ? (
        <Navigate to='/homepage' replace />
      ) : (
        <div className="Form" onSubmit={getUserData}>
          <img src={logo} alt="Groupomania" className="logo" />
          <div className="inputs">
            <form>
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
              <button type="submit" className="submit-button">Connexion</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
