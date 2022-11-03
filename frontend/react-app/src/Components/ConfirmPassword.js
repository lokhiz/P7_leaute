import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function confirmPassword() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Mot de passe requis")
      .min(3, "Le mot de passe doit contenir au moins 3 caractères"),
    confirmPwd: Yup.string()
      .required('Mot de passe requis')
      .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas')
  });
}