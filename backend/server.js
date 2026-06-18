const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store (replace with MongoDB for production)
const enquiries = [];

// Validation helper
function validateEnquiry({ name, email, phone }) {
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "A valid email address is required.";
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanPhone = phone ? phone.replace(/\s/g, "") : "";
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    errors.phone = "A valid 10-digit Indian mobile number is required.";
  }

  return errors;
}

// POST /api/enquiry
app.post("/api/enquiry", (req, res) => {
  const { name, email, phone } = req.body;

  // Validate
  const errors = validateEnquiry({ name, email, phone });
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors
    });
  }

  // Save enquiry
  const enquiry = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    createdAt: new Date().toISOString(),
    workshop: "AI & Robotics Summer Workshop 2026"
  };

  enquiries.push(enquiry);
  console.log(`✅ New enquiry from ${enquiry.name} (${enquiry.email})`);

  return res.status(201).json({
    success: true,
    message: "Enquiry submitted successfully! Our team will contact you within 24 hours.",
    data: {
      id: enquiry.id,
      name: enquiry.name,
      email: enquiry.email,
      createdAt: enquiry.createdAt
    }
  });
});

// GET /api/enquiries (admin view — protect in prod)
app.get("/api/enquiries", (req, res) => {
  res.json({ success: true, count: enquiries.length, data: enquiries });
});

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Kidrove Workshop API running." });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
