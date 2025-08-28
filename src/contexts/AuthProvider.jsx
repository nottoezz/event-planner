import React, { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./auth-store";

const LS_KEY = "eventplanner:user"; // Local storage unsecure

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user on when page load
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {
        //
        }
    }
  }, []);

  // Maintain when user change
  useEffect(() => {
    if (user) localStorage.setItem(LS_KEY, JSON.stringify(user));
    else localStorage.removeItem(LS_KEY);
  }, [user]);

  // Simple regristration save
  function register({ name, email, username, password }) {
    const newUser = { id: crypto.randomUUID(), name, email, username, password };
    setUser(newUser);
    return newUser;
  }

  const value = useMemo(() => ({ user, register }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
