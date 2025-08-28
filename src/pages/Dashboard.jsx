import { useState } from "react";
import { useEvents } from "../contexts/events-store.js";
import EventForm from "../components/EventForm.jsx";
import EventList from "../components/EventList.jsx";

export default function Dashboard() {
  const { events, addEvent, updateEvent, removeEvent } = useEvents();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  function handleCreate(values) {
    addEvent(values);
    setShowForm(false);
  }

  function handleUpdate(values) {
    updateEvent(editing.id, values);
    setEditing(null);
    setShowForm(false);
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
          title="Add event"
          className="btn"
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          disabled={showForm}
          style={{
            borderRadius: "999px",
            width: 42,
            height: 42,
            padding: 0,
            fontSize: "1.2rem",
            opacity: showForm ? 0.5 : 1,
            pointerEvents: showForm ? "none" : "auto",
          }}
        >
          +
        </button>
      </div>

      {/* Inline form */}
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

      {/* Upcoming events list */}
      {!showForm && (
        <section className="card" style={{ marginTop: "1rem" }}>
          <h2 style={{ marginTop: 0 }}>Upcoming events</h2>

          <EventList
            events={events}
            onEdit={(ev) => {
              setEditing(ev);
              setShowForm(true);
            }}
            onDelete={removeEvent}
          />
        </section>
      )}
    </div>
  );
}
