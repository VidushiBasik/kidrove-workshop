const details = [
  { icon: "👦", label: "Age Group", value: "8–14 Years", color: "#EEF3FF", accent: "#3B6FFF" },
  { icon: "📅", label: "Duration", value: "4 Weeks", color: "#FFF8E1", accent: "#FFB800" },
  { icon: "💻", label: "Mode", value: "100% Online", color: "#E8FFF5", accent: "#10B981" },
  { icon: "💰", label: "Fee", value: "₹2,999", color: "#FFF0F5", accent: "#EC4899" },
  { icon: "🚀", label: "Start Date", value: "15 July 2026", color: "#F0F4FF", accent: "#6366F1" },
  { icon: "🎓", label: "Certificate", value: "Yes, Included", color: "#FFFBEB", accent: "#F59E0B" },
];

export default function WorkshopDetails() {
  return (
    <section id="details" style={{ padding: "80px 0 90px", background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Workshop Details</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--navy)", marginBottom: 14 }}>
            Everything You Need to Know
          </h2>
          <p style={{ color: "var(--gray-500)", maxWidth: 520, margin: "0 auto", fontSize: 16 }}>
            A structured 4-week online journey designed to ignite curiosity and build real tech skills.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20
        }}>
          {details.map(({ icon, label, value, color, accent }) => (
            <div key={label} style={{
              background: color,
              borderRadius: "var(--radius)",
              padding: "28px 28px",
              display: "flex",
              alignItems: "center",
              gap: 18,
              border: `1.5px solid ${accent}22`,
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 8px 32px ${accent}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, flexShrink: 0,
                boxShadow: `0 2px 12px ${accent}20`
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 20, color: "var(--navy)" }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule teaser */}
        <div style={{
          marginTop: 48, padding: "32px 36px",
          background: "linear-gradient(135deg, #0F172A, #1E3A8A)",
          borderRadius: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24
        }}>
          <div>
            <div style={{ fontFamily: "Nunito", fontWeight: 800, fontSize: 22, color: "white", marginBottom: 6 }}>
              📆 4-Week Roadmap
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15 }}>
              Week 1: Intro to AI · Week 2: Machine Learning · Week 3: Robotics · Week 4: Build & Showcase
            </div>
          </div>
          <a href="#register" className="btn-primary" style={{ background: "#FFB800", color: "#0F172A", flexShrink: 0 }}>
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}
