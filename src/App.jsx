import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";

function Home() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Event Planner</h1>
      <p className="muted">
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
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
