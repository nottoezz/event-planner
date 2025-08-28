import React, { useEffect, useState } from "react";
import { AuthContext } from "./auth-store";

const LS_ACCOUNTS = "eventplanner:accounts"; // for checking accn
const LS_SESSION = "eventplanner:session"; // curr logged user

function readAccounts() {
  try {
    return JSON.parse(localStorage.getItem(LS_ACCOUNTS)) || {};
  } catch {
    return {};
  }
}
function writeAccounts(obj) {
  localStorage.setItem(LS_ACCOUNTS, JSON.stringify(obj));
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user on when page load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_SESSION);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      //
    }
  }, []);

  // Maintain when user change
  useEffect(() => {
    if (user) localStorage.setItem(LS_SESSION, JSON.stringify(user));
    else localStorage.removeItem(LS_SESSION);
  }, [user]);

  // Register usr
  function register({ name, email, username, password }) {
    const accounts = readAccounts();
    if (accounts[username]) {
      throw new Error("Username already exists");
    }
    const newAccount = {
      id: crypto.randomUUID(),
      name,
      email,
      username,
      password,
    };
    accounts[username] = newAccount;
    writeAccounts(accounts);
    return newAccount;
  }

  // Login, check saved credentials, then start a session
  function login({ username, password }) {
    const accounts = readAccounts();
    const saved = accounts[username];
    if (!saved) throw new Error("No such user. Please register first.");
    if (saved.password !== password) throw new Error("Invalid credentials");
    setUser(saved); // start session
    return saved;
  }

  // Logout clear session
  function logout() {
    setUser(null);
  }

  const value = { user, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
