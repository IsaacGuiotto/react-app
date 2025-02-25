import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/primary");
    } catch (error) {
      setError("Usuário ou senha inválidos");
    }
  };

  const goToRegistration = () => {
    navigate("/register");
  }

  return (
     <div className="container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <div className="form-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="login-buttons-container">
            <div className="button-container">
                <button onClick={handleLogin} className="login-button">
                Acessar
                </button>
            </div>
            <div className="button-container">
                <button onClick={goToRegistration} className="register-button">
                Registrar
                </button>
            </div>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}