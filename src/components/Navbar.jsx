import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #EEF3FF" : "none",
      transition: "all 0.3s ease",
      padding: "14px 0"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10, background: "var(--blue)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="8" r="3" fill="white"/>
              <rect x="7" y="13" width="8" height="6" rx="2" fill="white" opacity="0.85"/>
              <path d="M5 15h2M15 15h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="9.5" cy="8" r="0.8" fill="var(--blue)"/>
              <circle cx="12.5" cy="8" r="0.8" fill="var(--blue)"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 22, color: scrolled ? "var(--navy)" : "white", letterSpacing: "-0.3px" }}>
            kid<span style={{ color: "var(--amber)" }}>rove</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {["About", "Workshops", "Contact"].map(item => (
            <a key={item} href="#" style={{
              fontFamily: "Nunito", fontWeight: 700, fontSize: 15,
              color: scrolled ? "var(--gray-700)" : "rgba(255,255,255,0.85)",
              textDecoration: "none", transition: "color 0.2s"
            }}>{item}</a>
          ))}
          <a href="#register" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
            Enroll Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: scrolled ? "var(--navy)" : "white", margin: "5px 0", transition: "0.3s" }}/>
          <div style={{ width: 24, height: 2, background: scrolled ? "var(--navy)" : "white", margin: "5px 0", transition: "0.3s" }}/>
          <div style={{ width: 24, height: 2, background: scrolled ? "var(--navy)" : "white", margin: "5px 0", transition: "0.3s" }}/>
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
