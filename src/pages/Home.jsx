import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-gradient" />
        <div className="bg-grid" />
      </div>

      <div className="container">
        <div
          className="hero-content card"
          style={{ background: "rgba(18,25,34,0.65)" }}
        >
          <h1>Plan. Organise. Track.</h1>
          <p className="muted">
            A simple event planner to schedule appointments, meetings, and
            social gatherings. Create, edit, and manage events that persist per
            user.
          </p>

          <div className="hero-cta">
            <Link to="/login" className="btn">
              Go to Login
            </Link>
            <Link to="/help" className="btn btn-ghost">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
