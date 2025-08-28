import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-store.js";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Logout handle
  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand">
          Event Planner
        </Link>

        {/* nav - left */}
        <nav style={{ display: "flex", gap: ".75rem" }}>
          <NavLink to="/dashboard">Dashboard</NavLink>
          {!user && <NavLink to="/login">Login</NavLink>}
        </nav>

        {/* auth actions - right */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          {user ? (
            <>
              <span className="kpi">Hi, {user.name}</span>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <span className="kpi">Guest</span>
          )}
        </div>
      </div>
    </header>
  );
}
