import "./Register.css";
import logo from "../../assets/icon-left-font.png";
import { useForm } from "react-hook-form";

export function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="Form">
      <img src={logo} alt="Groupomania" className="logo" />
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email :"
            {...register("email")}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe :"
            {...register("password")}
            required
          />

          <input
            type="password"
            placeholder="Confirmation du mot de passe :"
            {...register("confirmPassword")}
            required
          />

          <button type="submit">Inscription</button>
        </form>
      </div>
    </div>
  );
}
