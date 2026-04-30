"use client";

// Clean SVG icons — no emoji, no libraries
const Icon = ({ d, color = "currentColor" }: { d: string; color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const skills = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    name: "PyTorch & TensorFlow",
    desc: "Deep learning",
  },
  {
    icon: <Icon d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
    name: "OpenCV & MediaPipe",
    desc: "Computer vision",
  },
  {
    icon: <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    name: "GPT-4o · Gemini · Claude",
    desc: "LLM integration",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    name: "RAG & GraphRAG",
    desc: "Retrieval systems",
  },
  {
    icon: <Icon d="M5 12h14M12 5l7 7-7 7" />,
    name: "FastAPI & Flask",
    desc: "Backend / APIs",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    name: "Supabase & PostgreSQL",
    desc: "Databases",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    name: "Docker & Vercel",
    desc: "DevOps / MLOps",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: "Python & TypeScript",
    desc: "Languages",
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <p className="label" style={{ marginBottom: 16 }}>Capabilities</p>
        <h2 style={{ marginBottom: 40, color: "var(--text)", lineHeight: 1.2 }}>
          Tools built for <span style={{ color: "var(--accent)" }}>production results</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10 }}>
          {skills.map(s => (
            <div key={s.name} style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "var(--bg)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "14px 18px",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                background: "var(--bg-subtle)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, color: "var(--text-2)",
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: "var(--text)", lineHeight: 1.3 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "'Poppins', sans-serif", marginTop: 3 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
