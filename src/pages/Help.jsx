export default function Help() {
  function handleContactSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "";
    const email = fd.get("email") || "";
    const message = fd.get("message") || "";
    const to = "support@example.com";

    const subject = `Event Planner — Help request from ${name || "User"}`;
    const body = `Name: ${name}\nEmail: ${email}\n---\n${message}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Help</h1>
      <p className="muted" style={{ marginTop: ".25rem" }}>
        Short guides for using the app.
      </p>

      {/* On this page */}
      <section className="card" style={{ marginTop: "1rem" }}>
        <h2 style={{ marginTop: 0 }}>On this page</h2>
        <div className="help-grid">
          <a className="help-toc" href="#navigation">
            Navigation
          </a>
          <a className="help-toc" href="#accounts">
            Register &amp; Login
          </a>
          <a className="help-toc" href="#events">
            Events
          </a>
          <a className="help-toc" href="#tips">
            Tips
          </a>
          <a className="help-toc" href="#troubleshoot">
            Troubleshoot
          </a>
          <a className="help-toc" href="#contact">
            Contact
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section
        id="navigation"
        className="card help-section"
        style={{ marginTop: "1rem" }}
      >
        <h2 style={{ marginTop: 0 }}>Navigation</h2>
        <ul className="reset" style={{ display: "grid", gap: ".5rem" }}>
          <li>
            <strong>Dashboard</strong> — see events, and add new ones
          </li>
          <li>
            <strong>Login</strong> — sign in with username + password.
          </li>
          <li>
            <strong>Help</strong> — you’re here.
          </li>
        </ul>
        <div className="callout" style={{ marginTop: ".75rem" }}>
          The header stays on top for quick access.
        </div>
      </section>

      {/* Accounts */}
      <section
        id="accounts"
        className="card help-section"
        style={{ marginTop: "1rem" }}
      >
        <h2 style={{ marginTop: 0 }}>Register &amp; Login</h2>
        <ol style={{ paddingLeft: "1.25rem" }}>
          <li>
            <strong>Register</strong> from the Login page. Enter name, email,
            username, password. Saves to this browser.
          </li>
          <li>
            <strong>Login</strong> with your username and password.
          </li>
          <li>
            <strong>Logout</strong> via the header. Session clears; your saved
            account remains.
          </li>
        </ol>
      </section>

      {/* Events */}
      <section
        id="events"
        className="card help-section"
        style={{ marginTop: "1rem" }}
      >
        <h2 style={{ marginTop: 0 }}>Events</h2>
        <ol style={{ paddingLeft: "1.25rem" }}>
          <li>
            <strong>Create</strong> — Dashboard → <strong>+</strong>. Fill name,
            date (YYYY-MM-DD), time, description, location.
          </li>
          <li>
            <strong>Edit</strong> — click <em>Edit</em>, change fields, save.
          </li>
          <li>
            <strong>Delete</strong> — click <em>Delete</em>.
          </li>
        </ol>
        <p className="muted" style={{ marginTop: ".5rem" }}>
          Events are stored in local storage.
        </p>
      </section>

      {/* Tips */}
      <section
        id="tips"
        className="card help-section"
        style={{ marginTop: "1rem" }}
      >
        <h2 style={{ marginTop: 0 }}>Tips</h2>
        <ul className="reset" style={{ display: "grid", gap: ".5rem" }}>
          <li>Use clear titles (e.g., “Kickoff — Client X”).</li>
          <li>Add a short agenda in the description.</li>
          <li>Include a precise room or meeting link.</li>
          <li>Dates require a 4-digit year (YYYY-MM-DD).</li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section
        id="troubleshoot"
        className="card help-section"
        style={{ marginTop: "1rem" }}
      >
        <h2 style={{ marginTop: 0 }}>Troubleshoot</h2>
        <ul className="reset" style={{ display: "grid", gap: ".5rem" }}>
          <li>No events after login? Check you’re on the right account.</li>
          <li>“Username already exists”? Choose a different username.</li>
        </ul>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="card help-section"
        style={{ marginTop: "1rem" }}
      >
        <h2 style={{ marginTop: 0 }}>Contact</h2>
        <p className="muted" style={{ marginBottom: ".75rem" }}>
          Questions? Send us a quick note.
        </p>

        <form
          onSubmit={handleContactSubmit}
          className="grid"
          style={{ gap: ".75rem" }}
        >
          <div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="How can we help?"
            />
          </div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <button className="btn" type="submit">
              Send email
            </button>
            <a
              className="btn"
              style={{ background: "#2c3645" }}
              href="mailto:support@example.com"
            >
              Email directly
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
