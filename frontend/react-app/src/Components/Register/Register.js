import { useState } from "react";
import axios from "axios";
import logo from "../../assets/icon-left-font.png";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  async function postUserData(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
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
        <section>
          <img src={logo} alt="Groupomania" className="logo" />
          <h1 className="success-message">Inscription réussie</h1>
        </section>
      ) : (
        <form className="Form" onSubmit={postUserData}>
          <img src={logo} alt="Groupomania" className="logo" />
          <input
            name="email"
            type="email"
            placeholder="Email :"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Mot de passe :"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="submit-button">Inscription</button>
        </form>
      )}
    </>
  );
}

export default Register;
