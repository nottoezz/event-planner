import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-store.js";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Simple change handler
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Submit login
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.username.trim() || !form.password) {
      setError("Username and password are required");
      return;
    }
    try {
      login(form); // AuthProvider save usr
      navigate("/dashboard"); // Send to dash after login
    } catch (err) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Login</h1>

      <form
        onSubmit={handleSubmit}
        className="card"
        style={{ marginTop: "1rem" }}
      >
        <div className="grid" style={{ gap: "1rem" }}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              aria-invalid={!!error && !form.username}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              aria-invalid={!!error && !form.password}
            />
          </div>
        </div>

        {error && (
          <div className="error" role="alert" style={{ marginTop: ".5rem" }}>
            {error}
          </div>
        )}

        <div style={{ display: "flex", gap: ".5rem", marginTop: ".75rem" }}>
          <button type="submit" className="btn">
            Login
          </button>
          <Link
            to="/register"
            className="btn"
            style={{ background: "#2c3645" }}
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
