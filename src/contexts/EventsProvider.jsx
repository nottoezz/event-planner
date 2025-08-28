import React, { useEffect, useState } from "react";
import { EventsContext } from "./events-store.js";
import { useAuth } from "./auth-store.js";

// Save usr events
const LS_EVENTS = "eventplanner:eventsByUser";

// helpers
function readAll() {
  try {
    return JSON.parse(localStorage.getItem(LS_EVENTS)) || {};
  } catch {
    return {};
  }
}
function writeAll(obj) {
  localStorage.setItem(LS_EVENTS, JSON.stringify(obj));
}

function sortByDate(list) {
  return [...list].sort((a, b) => {
    const ak = `${a.date || ""} ${a.time || ""}`;
    const bk = `${b.date || ""} ${b.time || ""}`;
    return ak.localeCompare(bk);
  });
}

export default function EventsProvider({ children }) {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  // Load users event
  useEffect(() => {
    if (!user) {
      setEvents([]);
      return;
    }
    const all = readAll();
    setEvents(all[user.id] || []);
  }, [user]);

  // Persists event on change
  useEffect(() => {
    if (!user) return;
    const all = readAll();
    all[user.id] = events;
    writeAll(all);
  }, [user, events]);

  // CRUD
  function addEvent(data) {
    const e = { id: crypto.randomUUID(), ...data, userId: user?.id };
    setEvents((prev) => sortByDate([...prev, e]));
  }

  function updateEvent(id, patch) {
    setEvents((prev) =>
      sortByDate(prev.map((e) => (e.id === id ? { ...e, ...patch } : e)))
    );
  }

  function removeEvent(id) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  // No useMemo!
  const value = { events, addEvent, updateEvent, removeEvent };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
}
