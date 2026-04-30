"use client";

const experience = [
  {
    period: "2025 – Present",
    role: "Co-Founder",
    org: "CREDA · AI Hiring Platform",
    type: "Startup",
    typeColor: "#a855f7",
    typeBg: "rgba(168,85,247,0.1)",
    points: [
      "Co-founding an AI-powered hiring intelligence startup",
      "Built multi-model interview pipeline (GPT-4o + Gemini + Claude 3.5) with anti-cheat detection",
      "Architected full-stack system with Supabase RLS, Redis/BullMQ, and recruiter & student dashboards",
      "Working toward product launch and first paying customers",
    ],
  },
  {
    period: "Jun – Jul 2025",
    role: "AI/ML Intern",
    org: "Equinoxis Pvt. Ltd.",
    type: "Internship",
    typeColor: "var(--accent-2)",
    typeBg: "rgba(106,155,204,0.12)",
    points: [
      "Researched deep learning approaches for a video generation pipeline",
      "Integrated third-party video generation APIs in a production environment",
      "Applied MLOps practices alongside the core engineering team",
    ],
  },
  {
    period: "2024",
    role: "Freelance Web Developer",
    org: "Global Industrial Supplies · globaltoolbay.com",
    type: "Freelance",
    typeColor: "#6b7280",
    typeBg: "rgba(107,114,128,0.1)",
    points: [
      "Built and deployed a fully responsive, SEO-optimized product showcase website",
      "Implemented structured data markup, downloadable brand catalogues, and a dynamic brand carousel",
    ],
  },
];

const hackathons = [
  {
    period: "2026",
    name: "TigerGraph Hackathon",
    project: "TechProbe AI",
    result: "Submission",
    description: "GraphRAG pipeline using TigerGraph 4-hop knowledge graph traversal. Reduced LLM context tokens ~75% (2500 → 600). Built live latency & cost comparison dashboard vs baseline LLM.",
  },
  {
    period: "2025",
    name: "Visa 24hr Hackathon · IITM",
    project: "",
    result: "Top 50",
    description: "Reached Top 50 out of national applicants at the Visa-sponsored 24-hour hackathon held at IIT Madras.",
  },
  {
    period: "2025",
    name: "Algo Bharat Hackseries",
    project: "",
    result: "Semifinalist",
    description: "Reached the national semifinal stage.",
  },
  {
    period: "2025",
    name: "BITS Pilani Hackathon",
    project: "",
    result: "Participant",
    description: "Built and presented at BITS Pilani Hyderabad Campus's annual technical hackathon.",
  },
];

export default function Experience() {
  return (
    <>
      {/* ── Experience ─────────────────────────────── */}
      <section id="experience">
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Background</p>
          <h2 style={{ marginBottom: 40, color: "var(--text)" }}>Experience</h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experience.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 32, padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <p style={{ fontSize: 13, fontFamily: "'Poppins', sans-serif", color: "var(--text-3)", marginBottom: 8 }}>{item.period}</p>
                  <span style={{
                    fontSize: 11, fontFamily: "'Poppins', sans-serif", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    color: item.typeColor, background: item.typeBg,
                    padding: "3px 8px", borderRadius: 4,
                  }}>{item.type}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, marginBottom: 4, color: "var(--text)" }}>{item.role}</h3>
                  <p style={{ fontSize: 14, color: "var(--accent)", fontFamily: "'Poppins', sans-serif", marginBottom: 14 }}>{item.org}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, paddingLeft: 0 }}>
                    {item.points.map(pt => (
                      <li key={pt} style={{ fontSize: 14, color: "var(--text-2)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--text-3)", marginTop: 1, flexShrink: 0 }}>–</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hackathons ─────────────────────────────── */}
      <section id="hackathons" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Competitions</p>
          <h2 style={{ marginBottom: 40, color: "var(--text)" }}>Hackathons</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {hackathons.map((h, i) => (
              <div key={i} className="card" style={{ background: "var(--bg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "'Poppins', sans-serif" }}>{h.period}</span>
                  <span style={{
                    fontSize: 11, fontFamily: "'Poppins', sans-serif", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    color: h.result === "Top 50" || h.result === "Semifinalist" ? "var(--accent)" : "var(--text-3)",
                    background: h.result === "Top 50" || h.result === "Semifinalist" ? "rgba(217,119,87,0.1)" : "var(--bg-subtle)",
                    padding: "3px 8px", borderRadius: 4,
                  }}>{h.result}</span>
                </div>
                <h3 style={{ fontSize: 15, marginBottom: 4, color: "var(--text)" }}>{h.name}</h3>
                {h.project && <p style={{ fontSize: 13, color: "var(--accent)", fontFamily: "'Poppins', sans-serif", marginBottom: 8 }}>{h.project}</p>}
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6, margin: 0 }}>{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
