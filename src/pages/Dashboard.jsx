import { useState } from "react";
import { Link } from "react-router-dom";
import { useEvents } from "../contexts/events-store.js";
import { useAuth } from "../contexts/auth-store.js";
import EventForm from "../components/EventForm.jsx";
import EventList from "../components/EventList.jsx";

export default function Dashboard() {
  const { user } = useAuth();
  const { events, addEvent, updateEvent, removeEvent } = useEvents();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [notice, setNotice] = useState("");

  function handleCreate(values) {
    addEvent(values);
    setShowForm(false);
  }

  function handleUpdate(values) {
    updateEvent(editing.id, values);
    setEditing(null);
    setShowForm(false);
  }

  // Open form only if logged in
  function openCreate() {
    if (!user) {
      setNotice("Please log in to add events.");
      return;
    }
    setEditing(null);
    setShowForm(true);
  }

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      {/* Header + add button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>
        <button
          aria-label="Add event"
          title={user ? "Add event" : "Login to add events"}
          className="btn"
          onClick={openCreate}
          disabled={!user}
          style={{
            borderRadius: "999px",
            width: 42,
            height: 42,
            padding: 0,
            fontSize: "1.2rem",
            opacity: user ? 1 : 0.6,
            cursor: user ? "pointer" : "not-allowed",
          }}
        >
          +
        </button>
      </div>

      {/* Inform guest users */}
      {!user && (
        <div className="callout" style={{ marginTop: "1rem" }}>
          <strong>Guest mode:</strong> You need to{" "}
          <Link to="/login" className="btn">
            log in
          </Link>{" "}
          to create events.
        </div>
      )}
      {notice && !user && (
        <div className="error" role="alert" style={{ marginTop: ".5rem" }}>
          {notice}
        </div>
      )}

      {/* Inline form (when adding or editing). Hides the list below while open. */}
      {showForm && (
        <div style={{ marginTop: "1rem" }}>
          <EventForm
            initial={editing || undefined}
            onSubmit={editing ? handleUpdate : handleCreate}
            onCancel={() => {
              setEditing(null);
              setShowForm(false);
            }}
          />
        </div>
      )}

      {/* Upcoming events list (only show when not adding/editing) */}
      {!showForm && (
        <section className="card" style={{ marginTop: "1rem" }}>
          <h2 style={{ marginTop: 0 }}>Upcoming events</h2>

          <EventList
            events={events}
            onEdit={(ev) => {
              setEditing(ev);
              setShowForm(true); // hide the list while editing
            }}
            onDelete={removeEvent}
          />
        </section>
      )}
    </div>
  );
}
