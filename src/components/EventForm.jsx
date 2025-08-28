import { useEffect, useState } from "react";

export default function EventForm({ initial, onSubmit, onCancel }) {
  const [values, setValues] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initial) setValues((prev) => ({ ...prev, ...initial }));
  }, [initial]);

  // Ensure fields are not empty
  function validate(v) {
    const e = {};
    if (!v.name?.trim()) e.name = "Event name is required";

    // Date must exist AND follow ISO YYYY-MM-DD (4-digit year)
    if (!v.date) e.date = "Date is required";
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(v.date))
      e.date = "Use YYYY-MM-DD with a 4-digit year";

    if (!v.time) e.time = "Time is required";
    if (!v.location?.trim()) e.location = "Location is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // Handle change allow use to update text box
  function handleChange(ev) {
    const { name, value } = ev.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  // When submit validate and return error or proceed
  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate(values)) return;
    onSubmit?.(values);
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="grid" style={{ gap: "1rem" }}>
        {/* Event name field */}
        <div>
          <label htmlFor="name">Event name</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <div className="error" role="alert">
              {errors.name}
            </div>
          )}
        </div>

        {/* Location field */}
        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            value={values.location}
            onChange={handleChange}
            aria-invalid={!!errors.location}
          />
          {errors.location && (
            <div className="error" role="alert">
              {errors.location}
            </div>
          )}
        </div>

        {/* Date field */}
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            aria-invalid={!!errors.date}
            // Help browsers enforce 4-digit years and a sane range:
            min="2024-12-31"
            max="2099-12-31"
          />
          {errors.date && (
            <div className="error" role="alert">
              {errors.date}
            </div>
          )}
        </div>

        {/* Time field */}
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            aria-invalid={!!errors.time}
          />
          {errors.time && (
            <div className="error" role="alert">
              {errors.time}
            </div>
          )}
        </div>

        {/* Description field */}
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={values.description}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Submit */}
      <div style={{ display: "flex", gap: ".5rem", marginTop: ".75rem" }}>
        <button type="submit" className="btn">
          {initial ? "Save changes" : "Add event"}
        </button>
        {onCancel && (
          <button
            type="button"
            className="btn"
            onClick={onCancel}
            style={{ background: "#2c3645" }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
