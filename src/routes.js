import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Primary from "./pages/Primary";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/primary" element={<Primary />} />
      </Routes>
    </Router>
  );
}