import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth-store.js";

export default function Header() {
  const { user } = useAuth();
  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand">Event Planner</Link>
        <nav style={{ display: "flex", gap: ".75rem" }}>
          <NavLink to="/register">Register</NavLink>
        </nav>
        <div style={{ marginLeft: "auto" }}>
          <span className="kpi">{user ? `Hi, ${user.name}` : "Guest"}</span>
        </div>
      </div>
    </header>
  );
}
