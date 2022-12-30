import { Link } from "react-router-dom";
import axios from "axios";

export default function Disconnect() {
  async function userLogout(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      window.location.replace("http://localhost:3000/login");
      alert("Vous avez bien été déconnecté.");
      localStorage.setItem("auth", false);
    } catch (error) {
      alert("Une erreur est survenue.");
      console.log(error);
    }
  }

  return (
    <Link onClick={userLogout} className="disconnect-button">
      Déconnexion
    </Link>
  );
}
