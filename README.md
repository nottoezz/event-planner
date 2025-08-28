# Event Planner (React + Vite)
A small web app to help users organise and manage personal or professional events. Built to practise React, JSX, JavaScript, and the Context API. The final app will let users schedule, view, and track events like appointments, meetings, or social gatherings, per the capstone brief.

# Status
Implemented so far:
- Sticky header (navigation bar) — persistent at the top; currently includes brand + link to Register. This aligns with the Navigation requirement for a fixed header and menu.
- Register page — users can create an account by entering name, email, username, password with client-side validation (required fields + email format).
- Local persistence (MVP) — the registered user is stored in localStorage (not secure) via a simple Auth provider.
- Routing & structure — basic routes (/, /register) and an organised file layout (pages/, components/, contexts/) following the brief’s guidance to keep structure clear and code readable.
- Runs with React + Vite — standard commands below.

# Planned next
- Login + protected dashboard — after registering, users log in to access a dashboard that shows upcoming events in an organised view
- Event management (CRUD) — add events (name, date, time, description, location), list them using array.map(), and allow update/delete with immediate state updates
- Context API everywhere it matters — Auth is already in Context; I'll add an Events context to manage event data app-wide.
- Help section — a page explaining navigation, registration/login, event create/edit/delete, and tips for organising effectively.
- Responsive design — refine mobile/desktop styles (or optionally add React-Bootstrap) for a polished look.
- Version control & docs — continue tracking progress with Git and keep this README clear and simple.

## Run locally
```
npm install
npm run dev
```


# Tech
- React + Vite
- React Router for navigation
- Context API
- LocalStorage

# File structure
```
src/
  components/
    Header.jsx
  contexts/
    AuthProvider.jsx
    auth-store.js
  pages/
    Register.jsx
  App.jsx
  main.jsx
  index.css
```
