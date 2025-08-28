# Event Planner (React + Vite)

I built a small web application to help organise and manage personal or professional events. It’s a client-side React app that lets a user register, log in, and create/edit/delete events. State is handled with the Context API and persisted in `localStorage` so data survives reloads. The UI is responsive and includes a fixed header and a Help page with guidance and a contact section.

---

## ✅ Capstone requirements (how I meet them)

### User features
- **Register**: I validate name, email, username, and password (required fields + email format).
- **Login**: After registration, the user logs in to access the dashboard (no auto-login).
- **Dashboard**: Once logged in, the dashboard displays upcoming events.

### Event management
- **Add events**: name, date, time, description, location.
- **List / calendar**: I render the upcoming events list using `array.map()` and keep it sorted by date+time.
- **Edit / delete**: Users can update or remove events; the UI updates immediately.
- **Per-user data**: Events are tied to the current session user. Switching accounts shows the correct user’s events.

### State management
- **Context API**: 
  - `AuthProvider` for user accounts and session.
  - `EventsProvider` for event data and CRUD operations.

### Help feature
- **Help page**: Explains navigation, how to register/login, how to create/edit/delete events, tips for organising, troubleshooting, and a **Contact us** section.

### Responsive design
- **Mobile-first styles**: Professional look on phones and desktops. Larger tap targets, mobile menu, fluid hero background on the home page.

### Version control
- **Git**: I tracked work in small commits. This README explains how to run and review the app.

### React + Vite
- **Tooling**: The reviewer can run the app with:
  ```bash
  npm install
  npm run dev
