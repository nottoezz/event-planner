import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Help from "./pages/Help.jsx";

function Home() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Event Planner</h1>
      <p className="muted">
        Project template. We’ll add features step-by-step.
      </p>
    </div>
  );
}

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
