import React, { useEffect, useMemo, useState, useCallback } from "react";
import { EventsContext } from "./events-store";
import { useAuth } from "./auth-store.js";

const LS_KEY = "eventplanner:eventsByUser";

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {};
  } catch {
    return {};
  }
}
function writeAll(obj) {
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

// Pure helper keep identity stable
function sortByDate(list) {
  return [...list].sort((a, b) => {
    const aKey = `${a.date || ""} ${a.time || ""}`;
    const bKey = `${b.date || ""} ${b.time || ""}`;
    return aKey.localeCompare(bKey);
  });
}

export default function EventsProvider({ children }) {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  // Load events when user changes
  useEffect(() => {
    if (!user) {
      setEvents([]);
      return;
    }
    const all = readAll();
    setEvents(all[user.id] || []);
  }, [user]);

  // Persist user events
  useEffect(() => {
    if (!user) return;
    const all = readAll();
    all[user.id] = events;
    writeAll(all);
  }, [user, events]);

  const addEvent = useCallback(
    (data) => {
      const e = { id: crypto.randomUUID(), ...data, userId: user?.id };
      setEvents((prev) => sortByDate([...prev, e]));
    },
    [user]
  );

  const updateEvent = useCallback((id, patch) => {
    setEvents((prev) =>
      sortByDate(prev.map((e) => (e.id === id ? { ...e, ...patch } : e)))
    );
  }, []);

  const removeEvent = useCallback((id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }, []);

  // Save context value
  const value = useMemo(
    () => ({ events, addEvent, updateEvent, removeEvent }),
    [events, addEvent, updateEvent, removeEvent]
  );

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
}
