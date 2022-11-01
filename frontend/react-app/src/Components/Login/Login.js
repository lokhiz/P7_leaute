import React, { useEffect, useState } from "react";

function App() {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });
  const [formValues, setFormValues] = useState([]);

  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <form className="form">
      <header>
        <div className="title">Inscription</div>
        <a className="loginLink">Connexion</a>
      </header>
      <div className="input-container">
        <label>Adresse Mail : </label>
        <input
          value={initialValues.email}
          onChange={(e) =>
            setInitialValues({ ...initialValues, email: e.target.value })
          }
          type="email"
          name="username"
          required
        />
      </div>
      <div className="input-container">
        <label>Mot de passe : </label>
        <input
          value={initialValues.password}
          onChange={(e) =>
            setInitialValues({ ...initialValues, password: e.target.value })
          }
          type="password"
          name="password"
          required
        />
      </div>
      <div className="button-container">
        <button onClick={submitForm}>S'inscrire</button>
      </div>
    </form>
  );
}

export default App;
