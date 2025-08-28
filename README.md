# Event Planner (React + Vite)

I built a small, responsive web application to help organise and manage personal or professional events. It demonstrates React, JSX, JavaScript, React Router, and the Context API. Users can register and log in, then create, edit, and delete events that persist per user in the browser.

---
### User features
- **Register**: I validate name, email, username, and password. Email format is checked and all fields are required.
- **Login**: After registration, the user must log in explicitly (no auto-login). On success, they land on the dashboard.
- **Dashboard**: Shows upcoming events for the logged-in user.

### Event management
- **Add events**: Each event has a **name**, **date**, **time**, **description**, and **location**.
- **Display events**: I render the list using `array.map()` and keep it sorted by date/time.
- **Edit / delete**: Users can update or remove events; the UI updates immediately by setting state.
- **Per-user data**: Events are scoped to the current user, so different users see their own events after login.

### Navigation
- **Fixed header**: A sticky header with navigation links to **Dashboard**, **Help**, **Contact**, and **Login**. It is mobile-friendly with a hamburger toggle on small screens.

### State management (Context API)
- `AuthProvider` manages user accounts (in `localStorage`) and the current session.
- `EventsProvider` manages the current user’s events and CRUD functions across the app.

### Help feature
- **Help page** explains how to navigate, register/login, create/edit/delete events, and includes organising tips and troubleshooting.
- A **Contact us** section lets the user open their email client with a prefilled message.

### Responsive design
- The layout, header, and forms adapt smoothly to small screens.
- The Home page has a clean hero background that fills the viewport under the sticky header.
- Inputs are sized to avoid iOS zoom; buttons/links have accessible tap targets.

### Version control & docs
- I tracked progress with Git in small, descriptive commits.
- This README explains installation, structure, and how the app meets the brief.

### React + Vite
- The app runs with the standard commands:
  ```bash
  npm install
  npm run dev
  ```

---

## Demo flow (for reviewers)

1. **Home** → Read the short intro; click **Go to Login**.
2. **Register** (via a link on the Login page) → Enter name, email, username, and password. This saves credentials to the browser but does **not** log in automatically.
3. **Login** → Enter the saved username and password. You land on **Dashboard**.
4. **Dashboard**
   - Click **+** to add an event (name, date, time, description, location).
   - Edit or delete from the events list.
   - Events persist in the browser **per user**. Log out and log in as another user to see separate events.
5. **Help** → Guidance, tips, troubleshooting, and a **Contact** section that opens the email client.

> If the user isn’t logged in, the **+** button is disabled and the UI asks them to log in first.

---

## Architecture

- **React + Vite** for fast dev and HMR.
- **React Router** for pages: Home, Login, Register, Dashboard, Help.
- **Context API** for shared state:
  - **Auth** (`AuthProvider`): stores multiple accounts and the current session in `localStorage`.
  - **Events** (`EventsProvider`): stores the current user’s events in `localStorage`, keyed by user id.

### Local storage keys
- `eventplanner:accounts` — Map of accounts by username:
  ```json
  {
    "jdoe": { "id": "...uuid...", "name": "John Doe", "email": "jdoe@example.com", "username": "jdoe", "password": "•••" }
  }
  ```
- `eventplanner:session` — The current logged-in user object.
- `eventplanner:eventsByUser` — Events grouped by user id:
  ```json
  {
    "user-uuid": [
      { "id": "...", "name": "Kickoff", "date": "2025-09-01", "time": "10:00", "description": "", "location": "", "userId": "user-uuid" }
    ]
  }
  ```

> **Security note:** `localStorage` is used for the purposes of this capstone only and is not secure for real credentials or sensitive data.

---

## Accessibility & UX choices

- Form errors are shown inline with `.error` text and `aria-invalid` attributes.
- The date input enforces `YYYY-MM-DD` with a **4-digit year**. For new events, the minimum date is **today**; when editing an older event, that older date remains allowed.
- The header is sticky and keyboard-focusable; focus outlines are visible for accessibility.
- The Dashboard disables **+** for guests and explains why.

---

## Styling & responsiveness

- Hand-written CSS for a clean, professional look; no heavy frameworks.
- Mobile-friendly header with a hamburger menu under 720px.
- The Home hero uses a soft gradient and grid background that fills the viewport.
- Cards, buttons, and inputs are sized for comfortable touch use.

---

## Scripts

- **`npm run dev`** — start the Vite dev server.
- **`npm run build`** — create a production build.
- **`npm run preview`** — preview the production build locally.

---

## Coding style

- Meaningful names, small components, and simple, readable logic.
- Consistent imports (e.g., `../contexts/auth-store.js`) to avoid duplicate context instances in dev.
- Small commits with messages explaining intent.

---

## Future improvements (nice-to-haves)

- Real authentication (hashed passwords, sessions) and a backend API.
- Calendar view in addition to the list.
- Stronger form validation (e.g., zod/yup) and test coverage.
- Configurable support email via `VITE_SUPPORT_EMAIL`.

---

## License

This project is for educational purposes as part of the capstone brief.
