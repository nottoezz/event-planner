export default function EventList({ events, onEdit, onDelete }) {
  if (!events?.length) {
    return (
      <p className="muted">No events yet — click the + button to add one.</p>
    );
  }

  return (
    <ul
      className="reset"
      style={{ display: "grid", gap: ".75rem", padding: 0, margin: 0 }}
    >
      {events.map((ev) => (
        <li
          key={ev.id}
          className="card"
          style={{ display: "grid", gap: ".5rem" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{ev.name}</strong>
              <div className="muted">
                {ev.date} {ev.time} • {ev.location}
              </div>
            </div>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <button
                className="btn"
                style={{ background: "#2c3645" }}
                onClick={() => onEdit?.(ev)}
              >
                Edit
              </button>
              <button
                className="btn"
                style={{ background: "#ef4444" }}
                onClick={() => onDelete?.(ev.id)}
              >
                Delete
              </button>
            </div>
          </div>
          {ev.description && <div>{ev.description}</div>}
        </li>
      ))}
    </ul>
  );
}
