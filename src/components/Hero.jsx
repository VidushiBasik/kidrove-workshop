export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #1D4ED8 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 100
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />

      {/* Glowing blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,111,255,0.25) 0%, transparent 70%)",
        filter: "blur(40px)"
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,184,0,0.15) 0%, transparent 70%)",
        filter: "blur(30px)"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Left: Text */}
          <div style={{ animation: "fadeInUp 0.7s ease both" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,184,0,0.15)", border: "1px solid rgba(255,184,0,0.3)",
              borderRadius: 100, padding: "6px 16px", marginBottom: 24
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB800", display: "inline-block" }}/>
              <span style={{ fontFamily: "Nunito", fontWeight: 700, fontSize: 13, color: "#FFB800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Summer 2026 · Limited Seats
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", color: "white", marginBottom: 20, lineHeight: 1.1 }}>
              AI & Robotics<br />
              <span style={{ color: "#FFB800" }}>Summer</span> Workshop
            </h1>

            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", marginBottom: 36, maxWidth: 460, lineHeight: 1.7 }}>
              Give your child a head-start in the future of tech. 4 weeks of hands-on AI projects, robot-building challenges, and creative problem-solving — all online.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#register" className="btn-primary" style={{ fontSize: 17, padding: "15px 36px" }}>
                Enroll Now →
              </a>
              <a href="#details" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.35)", fontSize: 17 }}>
                Learn More
              </a>
            </div>

            {/* Quick Stats */}
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { num: "8–14", label: "Age Group" },
                { num: "4 Weeks", label: "Duration" },
                { num: "₹2,999", label: "All Inclusive" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: "Nunito", fontSize: 24, fontWeight: 900, color: "white" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Robot Illustration */}
          <div style={{ display: "flex", justifyContent: "center", animation: "float 4s ease-in-out infinite" }}>
            <RobotIllustration />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg style={{ position: "absolute", bottom: -1, left: 0, right: 0, width: "100%" }} viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
      </svg>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-robot { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function RobotIllustration() {
  return (
    <svg width="360" height="400" viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glow behind robot */}
      <ellipse cx="180" cy="340" rx="100" ry="20" fill="rgba(59,111,255,0.3)" filter="blur(12px)"/>

      {/* Antenna */}
      <line x1="180" y1="60" x2="180" y2="90" stroke="#94A3B8" strokeWidth="3"/>
      <circle cx="180" cy="52" r="9" fill="#FFB800"/>
      <circle cx="180" cy="52" r="5" fill="#FF8C00"/>

      {/* Head */}
      <rect x="120" y="90" width="120" height="100" rx="20" fill="#1E3A8A"/>
      <rect x="120" y="90" width="120" height="100" rx="20" stroke="#3B6FFF" strokeWidth="2"/>

      {/* Eyes */}
      <rect x="138" y="115" width="34" height="28" rx="8" fill="#0F172A"/>
      <rect x="188" y="115" width="34" height="28" rx="8" fill="#0F172A"/>
      <circle cx="155" cy="129" r="9" fill="#3B6FFF"/>
      <circle cx="205" cy="129" r="9" fill="#3B6FFF"/>
      <circle cx="155" cy="129" r="4" fill="white"/>
      <circle cx="205" cy="129" r="4" fill="white"/>
      <circle cx="157" cy="127" r="2" fill="#0F172A"/>
      <circle cx="207" cy="127" r="2" fill="#0F172A"/>

      {/* Mouth */}
      <rect x="148" y="163" width="64" height="14" rx="7" fill="#0F172A"/>
      <rect x="151" y="166" width="14" height="8" rx="3" fill="#10B981"/>
      <rect x="169" y="166" width="14" height="8" rx="3" fill="#FFB800"/>
      <rect x="187" y="166" width="14" height="8" rx="3" fill="#3B6FFF"/>

      {/* Neck */}
      <rect x="168" y="190" width="24" height="18" rx="4" fill="#334155"/>

      {/* Body */}
      <rect x="95" y="208" width="170" height="130" rx="24" fill="#1E3A8A"/>
      <rect x="95" y="208" width="170" height="130" rx="24" stroke="#3B6FFF" strokeWidth="2"/>

      {/* Chest panel */}
      <rect x="115" y="225" width="130" height="80" rx="12" fill="#0F172A"/>

      {/* Circuit lines on chest */}
      <path d="M130 255 L160 255 L160 245 L185 245" stroke="#3B6FFF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M130 265 L145 265 L145 275 L185 275" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M185 245 L220 245" stroke="#3B6FFF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M185 275 L220 275" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="130" cy="255" r="3" fill="#FFB800"/>
      <circle cx="130" cy="265" r="3" fill="#FFB800"/>
      <circle cx="185" cy="245" r="4" fill="#3B6FFF"/>
      <circle cx="185" cy="275" r="4" fill="#10B981"/>

      {/* Power button */}
      <circle cx="180" cy="290" r="14" fill="#1E3A8A" stroke="#3B6FFF" strokeWidth="2"/>
      <circle cx="180" cy="290" r="8" fill="#3B6FFF"/>
      <path d="M180 284 L180 290" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M176 286 Q173 290 176 294 Q180 297 184 294 Q187 290 184 286" stroke="white" strokeWidth="1.5" fill="none"/>

      {/* Left Arm */}
      <rect x="58" y="215" width="37" height="100" rx="18" fill="#1E3A8A" stroke="#3B6FFF" strokeWidth="2"/>
      <rect x="50" y="305" width="45" height="28" rx="12" fill="#334155"/>

      {/* Right Arm */}
      <rect x="265" y="215" width="37" height="100" rx="18" fill="#1E3A8A" stroke="#3B6FFF" strokeWidth="2"/>
      <rect x="265" y="305" width="45" height="28" rx="12" fill="#334155"/>

      {/* Legs */}
      <rect x="120" y="336" width="44" height="50" rx="16" fill="#1E3A8A" stroke="#3B6FFF" strokeWidth="2"/>
      <rect x="196" y="336" width="44" height="50" rx="16" fill="#1E3A8A" stroke="#3B6FFF" strokeWidth="2"/>

      {/* Feet */}
      <rect x="112" y="374" width="56" height="20" rx="10" fill="#334155"/>
      <rect x="192" y="374" width="56" height="20" rx="10" fill="#334155"/>

      {/* Floating icons */}
      <g style={{animation: "float 3s ease-in-out 0.5s infinite"}}>
        <circle cx="60" cy="150" r="24" fill="rgba(255,184,0,0.15)" stroke="rgba(255,184,0,0.4)" strokeWidth="1.5"/>
        <text x="60" y="157" textAnchor="middle" fontSize="18">🤖</text>
      </g>
      <g style={{animation: "float 3.5s ease-in-out 1s infinite"}}>
        <circle cx="308" cy="170" r="24" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5"/>
        <text x="308" y="177" textAnchor="middle" fontSize="18">💡</text>
      </g>
      <g style={{animation: "float 2.8s ease-in-out 0.2s infinite"}}>
        <circle cx="320" cy="260" r="20" fill="rgba(59,111,255,0.15)" stroke="rgba(59,111,255,0.4)" strokeWidth="1.5"/>
        <text x="320" y="267" textAnchor="middle" fontSize="15">⚙️</text>
      </g>
    </svg>
  );
}
