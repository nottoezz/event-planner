# Event Planner (React + Vite)

I built a small, responsive event planner to meet the capstone brief.

## ✅ Capstone requirements
- **User features**
  - Register with **name, email, username, password** (required + email format validation).
  - **Login** to access the **Dashboard** (no auto‑login after register).
  - Dashboard shows **upcoming events** for the logged‑in user.
- **Event management**
  - Add events: **name, date (YYYY‑MM‑DD, 4‑digit year), time, description, location**.
  - Display events with **`array.map()`**, sorted by date/time.
  - **Edit** and **Delete** update state immediately.
  - Events are **per user** and **persist in localStorage**.
- **Navigation**
  - **Fixed header** (sticky) with links: Dashboard, Help, Contact, Login/Logout.
- **State management**
  - **Context API** for both **Auth** (accounts + session) and **Events**.
- **Help feature**
  - **Help page** explains navigation, register/login, create/edit/delete, tips, troubleshooting, and **Contact us**.
- **Responsive design**
  - Mobile‑friendly header/menu, forms, and layout.
- **Version control & docs**
  - Tracked with Git; this README explains how to run and review.

---

## Quick start
```bash
npm install
npm run dev
```
Open the local Vite URL in your browser (Node 18+ recommended).

---

## What you can do
1. **Register** from the Login page (saves credentials locally; not secure—demo only).
2. **Login** with username and password.
3. **Dashboard**: add (**+**), edit, or delete events. Changes persist **per user**.
4. **Help**: quick guidance, tips, troubleshooting, and **Contact** (mailto form).

> If you’re not logged in, the **+** button is disabled and the page prompts you to log in.

---

## Tech & decisions
- **React + Vite**, **React Router**, **Context API**.
- `localStorage` keys:
  - `eventplanner:accounts` — accounts by username.
  - `eventplanner:session` — current user.
  - `eventplanner:eventsByUser` — events by user id.
- **Note**: `localStorage` is for the capstone only; not suitable for real credentials.

---

## Project structure (short)
```
src/
  components/      # Header, EventForm, EventList
  contexts/        # AuthProvider, EventsProvider, auth-store, events-store
  pages/           # Home, Login, Register, Dashboard, Help
  App.jsx          # Routes
  main.jsx         # Providers + Router
  index.css        # Theme + responsive styles
```

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build

## License
Educational project for the capstone brief.
