import { useState } from "react";

const faqs = [
  {
    q: "Does my child need prior coding experience?",
    a: "Not at all! This workshop is designed for complete beginners aged 8–14. We start from the basics and use visual, game-based tools that make learning intuitive and fun. By the end, your child will have real coding experience — not assumed."
  },
  {
    q: "What devices and software are needed?",
    a: "Any laptop or desktop with a stable internet connection works perfectly. We use browser-based tools (no installation required). A tablet can work for viewing sessions but a keyboard is recommended for the coding activities."
  },
  {
    q: "How many hours per week does it involve?",
    a: "The workshop runs for roughly 6–8 hours per week: 3 live sessions (60–75 min each) plus independent project time. All live sessions are recorded so your child won't miss out if they need to skip one."
  },
  {
    q: "Will my child receive a certificate?",
    a: "Yes — every child who completes the 4-week workshop and submits their capstone project receives a digital certificate of completion from Kidrove, which they can add to their portfolio or school applications."
  },
  {
    q: "What is the refund policy?",
    a: "We offer a full refund if requested within 7 days of enrollment, or if you cancel before the workshop start date (15 July 2026). After the first session, a 50% refund is available up until end of Week 1. No refunds are issued after Week 2 begins."
  },
  {
    q: "How large are the batches?",
    a: "Each batch is capped at 20 children to ensure every student gets personal attention from the instructor. Once a batch is full, you'll be moved to the next available slot — so early enrollment is recommended."
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{
      border: `1.5px solid ${isOpen ? "var(--blue)" : "var(--gray-100)"}`,
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      transition: "border-color 0.2s",
      background: isOpen ? "var(--blue-light)" : "white"
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", textAlign: "left",
          padding: "22px 24px",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16
        }}
      >
        <span style={{
          fontFamily: "Nunito", fontWeight: 700, fontSize: 16,
          color: isOpen ? "var(--blue)" : "var(--navy)"
        }}>
          {q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          background: isOpen ? "var(--blue)" : "var(--gray-100)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
          fontSize: 16, color: isOpen ? "white" : "var(--gray-500)"
        }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div style={{
        maxHeight: isOpen ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease"
      }}>
        <p style={{
          padding: "0 24px 22px",
          color: "var(--gray-700)", fontSize: 15, lineHeight: 1.7
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ padding: "80px 0 90px", background: "white" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr",
          gap: 64, alignItems: "start"
        }}>
          {/* Left */}
          <div style={{ position: "sticky", top: 100 }}>
            <span className="section-label">FAQ</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", color: "var(--navy)", marginBottom: 16 }}>
              Questions Parents Ask
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Can't find what you're looking for? We're happy to chat.
            </p>
            <a href="mailto:hello@kidrove.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--blue)", fontFamily: "Nunito", fontWeight: 700, fontSize: 15,
              textDecoration: "none", padding: "10px 20px",
              border: "2px solid var(--blue)", borderRadius: 100,
              transition: "all 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--blue-light)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              💬 Contact Us
            </a>
          </div>

          {/* Right: Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
