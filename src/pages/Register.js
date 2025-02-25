import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", name: "", lastName: "", birthDate: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: form.name,
        lastName: form.lastName,
        birthDate: form.birthDate,
      });

      navigate("/");
    } catch (error) {
      setError("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div className="container">
    <div className="register-box">
      <h2 className="register-title">Cadastro</h2>
      <div className="form-container">
        <input type="text" name="name" placeholder="Nome" onChange={handleChange} className="input" />
        <input type="text" name="lastName" placeholder="Sobrenome" onChange={handleChange} className="input" />
        <input type="date" name="birthDate" onChange={handleChange} className="input" />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} className="input" />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} className="input" />
      </div>
      <div className="register-buttons-container">
        <button onClick={handleRegister} className="register-button">
          Cadastrar
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  </div>
  );
}