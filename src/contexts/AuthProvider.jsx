import React, { useEffect, useState } from "react";
import { AuthContext } from "./auth-store";

const LS_ACCOUNT_KEY = "eventplanner:account"; // save cred
const LS_SESSION_KEY = "eventplanner:session"; // save cur session

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user on when page load
  useEffect(() => {
    try {
      const rawSession = localStorage.getItem(LS_SESSION_KEY);
      if (rawSession) setUser(JSON.parse(rawSession));
    } catch {
      //
    }
  }, []);

  // Maintain when user change
  useEffect(() => {
    if (user) localStorage.setItem(LS_SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(LS_SESSION_KEY);
  }, [user]);

  // Regristration save
  function register({ name, email, username, password }) {
    const newAccount = {
      id: crypto.randomUUID(),
      name,
      email,
      username,
      password,
    };
    localStorage.setItem(LS_ACCOUNT_KEY, JSON.stringify(newAccount));
    return newAccount;
  }

  // Check saved credentials, then start a session
  function login({ username, password }) {
    const raw = localStorage.getItem(LS_ACCOUNT_KEY);
    if (!raw) throw new Error("No saved account. Please register first.");
    const saved = JSON.parse(raw);
    if (saved.username === username && saved.password === password) {
      setUser(saved); 
      return saved;
    }
    throw new Error("Invalid credentials");
  }

  // Logout clear session
  function logout() {
    setUser(null);
  }

  const value = { user, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
