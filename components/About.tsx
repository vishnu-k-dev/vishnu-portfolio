"use client";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="label" style={{ marginBottom: 16 }}>About</p>
        <h2 style={{ marginBottom: 40, color: "var(--text)" }}>The engineer behind the work</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          {/* Left — bio */}
          <div>
            <p style={{ marginBottom: 16 }}>
              I&apos;m a 3rd-year B.E. AI & ML student at BNMIT, Bengaluru (GPA 8.24). I build things end-to-end — not just notebooks, but systems that run in production with real users and measurable outcomes.
            </p>
            <p style={{ marginBottom: 16 }}>
              My work spans computer vision (CNNs, ViT, Grad-CAM), LLM engineering (multi-model pipelines, RAG, GraphRAG), and backend systems (FastAPI, Redis, Supabase). I care about deployment, reliability, and results.
            </p>
            <p>
              Currently co-founding CREDA, exploring GraphRAG architectures, and making ML more explainable and production-ready.
            </p>
          </div>

          {/* Right — quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { label: "Degree", value: "B.E. AI & ML · BNMIT" },
              { label: "GPA", value: "8.24 / 10" },
              { label: "Location", value: "Bengaluru, India" },
              { label: "Internship", value: "AI/ML Intern · Equinoxis" },
              { label: "Email", value: "vishnuk2006@protonmail.com", link: "mailto:vishnuk2006@protonmail.com" },
              { label: "GitHub", value: "vishnu-k-dev", link: "https://github.com/vishnu-k-dev/" },
              { label: "LinkedIn", value: "vishnu-k-dev", link: "https://www.linkedin.com/in/vishnu-k-dev/" },
              { label: "X", value: "@vishnuk_io", link: "https://x.com/vishnuk_io" },
            ].map(f => (
              <div key={f.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--border)", gap: 16 }}>
                <span className="label">{f.label}</span>
                {f.link
                  ? <a href={f.link} target={f.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      style={{ fontSize: 14, fontFamily: "'Poppins', sans-serif", color: "var(--accent)", textAlign: "right" }}>
                      {f.value}
                    </a>
                  : <span style={{ fontSize: 14, fontFamily: "'Poppins', sans-serif", color: "var(--text)", textAlign: "right" }}>{f.value}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
