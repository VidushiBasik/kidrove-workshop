<<<<<<< HEAD
# Kidrove — AI & Robotics Summer Workshop Landing Page

A responsive React.js landing page + Express.js API for Kidrove's AI & Robotics Summer Workshop.

## 🚀 Tech Stack

- **Frontend:** React 18, Vite, CSS-in-JS (inline styles)
- **Backend:** Node.js, Express.js
- **No external UI library** — fully custom design

---

## 📁 Project Structure

```
kidrove-workshop/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with scroll effect
│   │   ├── Hero.jsx            # Full-screen hero with robot SVG
│   │   ├── WorkshopDetails.jsx # Detail cards + schedule teaser
│   │   ├── LearningOutcomes.jsx# 6 outcome cards
│   │   ├── FAQ.jsx             # Accordion FAQ (6 items)
│   │   ├── RegistrationForm.jsx# Form with validation + loading state
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── backend/
│   ├── server.js               # Express API
│   └── package.json
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup & Run

### Frontend
```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

### Backend
```bash
cd backend
npm install
npm run dev
# API runs at http://localhost:5000
```

---

## 🔌 API

### `POST /api/enquiry`

**Request body:**
```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "9876543210"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully! Our team will contact you within 24 hours.",
  "data": {
    "id": 1718700000000,
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "createdAt": "2026-06-18T10:00:00.000Z"
  }
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "message": "Validation failed. Please check your inputs.",
  "errors": {
    "email": "A valid email address is required."
  }
}
```

---

## ✅ Features

- Responsive design (mobile-first)
- Animated hero with custom robot SVG illustration
- Workshop detail cards
- 6 learning outcomes
- 6 FAQ accordion
- Registration form with client-side validation
- Loading state on submit
- Success state after form submission
- Sticky navbar with scroll effect
- Express API with field validation

---

## 📝 Submission Note (100–150 words)

My approach was to reference Kidrove's blue-first brand identity and build a page that's vibrant and child-friendly while staying clean and trustworthy enough for parents making a purchase decision. I decomposed the UI into small, focused React components with no external UI library so the design is fully custom. The form uses controlled inputs with real-time error clearing and a loading spinner during submission. The Express backend validates all fields server-side and returns structured error responses the frontend can map back to individual fields. 

Given more time, I'd add a MongoDB integration with Mongoose for persistent enquiry storage, a confirmation email via Nodemailer, TypeScript across the codebase, proper unit tests with Jest/Vitest, and smooth scroll-triggered reveal animations using Intersection Observer to make the page feel more alive as users scroll.
=======
# kidrove-workshop
>>>>>>> b48339bcf8e114b9fb2d7701b8d8c33e677d1f06
