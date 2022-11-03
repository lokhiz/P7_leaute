import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import logo from "../../assets/icon-left-font.png";

export function Register() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Mot de passe requis")
      .min(3, "3 caractères minimum requis"),
    confirmPwd: Yup.string()
      .required("Mot de passe requis")
      .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  const handleClick = (data) => {
    axios.post("http://localhost:5000/register/", {
      email: "",
      password: "",
    });
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <img src={logo} alt="Groupomania" className="logo" />
      <input
        type="email"
        placeholder="Email :"
        {...register("email")}
        required
      />
      <div className="form-group">
        <input
          name="password"
          type="password"
          placeholder="Mot de passe :"
          {...register("password")}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className="form-group">
        <input
          name="confirmPwd"
          type="password"
          placeholder="Confirmez le mot de passe"
          {...register("confirmPwd")}
          className={`form-control ${errors.confirmPwd ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
      </div>
      <button onClick={handleClick} type="submit">
        Inscription
      </button>
    </form>
  );
}
