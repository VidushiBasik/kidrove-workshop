const outcomes = [
  {
    icon: "🧠",
    title: "Understand How AI Thinks",
    desc: "Learn the core concepts behind artificial intelligence — from pattern recognition to decision trees — through hands-on games and visual demos."
  },
  {
    icon: "🤖",
    title: "Build & Program a Robot",
    desc: "Assemble a virtual robot and write code to make it move, sense its environment, and respond to real-world challenges."
  },
  {
    icon: "📊",
    title: "Train a Machine Learning Model",
    desc: "Feed a model real data, watch it learn, and understand why it makes the predictions it does — no prior experience needed."
  },
  {
    icon: "🎮",
    title: "Create an AI-Powered Game",
    desc: "Apply everything you've learned to design and build an original mini-game with an AI opponent using Scratch or Python."
  },
  {
    icon: "🔍",
    title: "Develop Computational Thinking",
    desc: "Break big problems into small steps, spot patterns, and think like an engineer — skills that apply far beyond just coding."
  },
  {
    icon: "🏆",
    title: "Showcase Your Capstone Project",
    desc: "Present a completed AI or robotics project in a live demo day, earn your certificate, and leave with a portfolio piece you built yourself."
  },
];

export default function LearningOutcomes() {
  return (
    <section style={{ padding: "80px 0 90px", background: "var(--gray-50)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">What You'll Learn</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--navy)", marginBottom: 14 }}>
            6 Real Skills, 4 Weeks
          </h2>
          <p style={{ color: "var(--gray-500)", maxWidth: 500, margin: "0 auto", fontSize: 16 }}>
            Each outcome is something your child can demonstrate — not just describe.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24
        }}>
          {outcomes.map(({ icon, title, desc }, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: "var(--radius)",
              padding: "28px",
              border: "1.5px solid var(--gray-100)",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--blue)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--gray-100)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}>
              {/* Number badge */}
              <div style={{
                position: "absolute", top: 20, right: 20,
                fontFamily: "Nunito", fontSize: 44, fontWeight: 900,
                color: "var(--gray-100)", lineHeight: 1, userSelect: "none"
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: "Nunito", fontSize: 18, fontWeight: 800, color: "var(--navy)", marginBottom: 10 }}>
                {title}
              </h3>
              <p style={{ color: "var(--gray-500)", fontSize: 14.5, lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
