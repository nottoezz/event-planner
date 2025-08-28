import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-store.js";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    setOpen(false);
    navigate("/login");
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={closeMenu}>
          Event Planner
        </Link>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple hamburger icon */}
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Primary nav */}
        <nav id="primary-nav" className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/dashboard" onClick={closeMenu}>
            Dashboard
          </NavLink>
          <NavLink to="/help" onClick={closeMenu}>
            Help/Contact
          </NavLink>

          {!user && (
            <NavLink to="/login" onClick={closeMenu}>
              Login
            </NavLink>
          )}

          {user && (
            <div className="nav-actions">
              <span className="kpi">Hi, {user.name}</span>
              <button className="btn btn-ghost" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
