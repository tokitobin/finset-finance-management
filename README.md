# FinSet — Finance Management Web Application

A pixel-perfect, responsive frontend implementation of the **FinSet** UI/UX design concept. This project was built to translate high-fidelity design specifications into clean, maintainable, and interactive code.

---

## Purpose & Goals

This repository was created for **educational, personal growth, and portfolio purposes**. The primary focus of this project was to:
* **Advance UI/UX Translation Skills:** Accurately implement complex dashboard layouts, typography, and spacing from a real-world design case study.
* **Master Component Architecture:** Build a scalable, reusable frontend structure capable of handling interactive state and dynamic layouts.
* **Simulate Real-World Workflows:** Bridge the gap between design and development by treating the Behance specification as a client brief.

**Original Design:** [FinSet on Behance](https://www.behance.net/gallery/198771803/FinSet-Web-App-for-finance-management-UX-UI-design)
**Design Concept By:** Alvina Hromadetska

---

## Tech Stack

* **Framework:** React
* **Styling:** SCSS (Sassy CSS)
* **Icons & UI Graphics:** Lucide React

---

## Architecture & Project Structure

The project follows a component-driven architectural pattern, enforcing a clean separation of concerns between global layouts, reusable UI elements, and view-specific features.

```text
src/
├── assets/          # Static assets (images, logos, SVGs)
├── components/      # Reusable, global UI elements (Buttons, Sidebar, Navbar)
└── features/        # Feature-specific modules (Dashboard layouts, Transaction tables)
```

## Future Roadmap

While the initial phase focuses strictly on pixel-perfect frontend presentation, the long-term goal is to transition this into a full-stack financial application. Planned integrations include:

* **Backend API:** Building a secure RESTful API to handle financial transactions, user data, and account logic.
* **Database Management:** Integrating a relational database to maintain data integrity for complex financial tracking (e.g., ledgers, user accounts, and monthly histories).
* **Authentication:** Implementing secure user registration, login sessions, and protected routes.
* **Dynamic Data:** Replacing hardcoded mock data with real-time state management and server-side responses.
