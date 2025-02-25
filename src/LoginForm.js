import { useState } from "react";
import "./LoginForm.css"; // Importando o CSS

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const correctEmail = "isaac.guiotto@pucpr.edu.br";
  const correctPassword = "123456";

  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      setMessage("Acessado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <div className="form-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <div className="button-container">
          <button onClick={handleLogin} className="button">
            Acessar
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}