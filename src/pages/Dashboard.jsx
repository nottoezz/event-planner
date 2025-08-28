export default function Dashboard() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Dashboard</h1>

      <section className="card" style={{ marginTop: "1rem" }}>
        <h2 style={{ marginTop: 0 }}>Upcoming events</h2>

        <p className="muted" aria-live="polite">
          No events yet — once you add some, they’ll appear here in date order.
        </p>

        {/* TODO: After we add Events context:
            - fetch the current user's events
            - sort by date/time
            - render with array.map(...)
        */}
      </section>
    </div>
  );
}
