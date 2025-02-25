import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../css/Primary.css";

export default function Primary() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate("/");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="container">
    <div className="primary-box">
      <h2 className="primary-title">Página Principal</h2>
      {userData ? (
        <div className="user-info">
          <p>Nome: {userData.name}</p>
          <p>Sobrenome: {userData.lastName}</p>
          <p>Data de Nascimento: {userData.birthDate}</p>
        </div>
      ) : (
        <p className="loading">Carregando...</p>
      )}
    </div>
  </div>
  );
} 