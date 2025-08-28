import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-store.js";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // Ensure fields are not empty and email is valid
  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = "Name is required";
    if (!v.username.trim()) e.username = "Username is required";
    if (!v.password) e.password = "Password is required";
    if (!v.email) e.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      e.email = "Invalid email format";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // Handle change allow use to update text box
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // When submit validate and return error or proceed
  function handleSubmit(e) {
    e.preventDefault();
    setServerError("");
    if (!validate(form)) return;

    try {
      register(form);
      navigate("/login");
    } catch (err) {
      setServerError(err.message || "Registration failed");
    }
  }

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Create account</h1>

      <form
        onSubmit={handleSubmit}
        className="card"
        style={{ marginTop: "1rem" }}
      >
        <div className="grid" style={{ gap: "1rem" }}>
          {/*Name field*/}
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              className={errors.name ? "input-error" : undefined}
            />
            {errors.name && (
              <div className="error" role="alert">
                {errors.name}
              </div>
            )}
          </div>

          {/*Email field*/}
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              className={errors.email ? "input-error" : undefined}
            />
            {errors.email && (
              <div className="error" role="alert">
                {errors.email}
              </div>
            )}
          </div>

          {/*Username field*/}
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              aria-invalid={!!errors.username}
              className={errors.username ? "input-error" : undefined}
            />
            {errors.username && (
              <div className="error" role="alert">
                {errors.username}
              </div>
            )}
          </div>

          {/*Password field*/}
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              aria-invalid={!!errors.password}
              className={errors.password ? "input-error" : undefined}
            />
            {errors.password && (
              <div className="error" role="alert">
                {errors.password}
              </div>
            )}
          </div>
        </div>

        {serverError && (
          <div className="error" role="alert" style={{ marginTop: ".5rem" }}>
            {serverError}
          </div>
        )}

        <div style={{ display: "flex", gap: ".5rem", marginTop: ".75rem" }}>
          <input type="submit" value="Register" className="btn" />
          <Link to="/login" className="btn" style={{ background: "#2c3645" }}>
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
}
