import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-store.js";

export default function Protected({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}
