import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}
