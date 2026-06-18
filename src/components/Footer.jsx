export default function Footer() {
  return (
    <footer style={{
      background: "var(--navy)", padding: "40px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)"
    }}>
      <div className="container" style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8, background: "var(--blue)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="8" r="3" fill="white"/>
              <rect x="7" y="13" width="8" height="6" rx="2" fill="white" opacity="0.85"/>
              <path d="M5 15h2M15 15h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Nunito", fontWeight: 900, fontSize: 20, color: "white" }}>
            kid<span style={{ color: "#FFB800" }}>rove</span>
          </span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
          © 2026 Kidrove. AI & Robotics Summer Workshop. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Contact"].map(link => (
            <a key={link} href="#" style={{
              color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}
            >{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
