import "./Login.css";
import logo from "../../assets/icon-left-font.png";
import { useForm } from 'react-hook-form';

export function Login() {
  const {login, setLogin} = useForm()
  const onSubmit = data => console.log(data);

  return (
    <div className="Form">
      <img src={logo} alt="Groupomania" className="logo" />
      <div className="inputs">
        <form>
          <input type="text" name="email" placeholder="Email :" />

          <input type="password" name="password" placeholder="Mot de passe :" />

          <button>Connexion</button>
        </form>
      </div>
    </div>
  );
}