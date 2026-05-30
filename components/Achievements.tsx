export default function Achievements() {
  const items = [
    {
      title: "Async multi-model interview pipeline",
      detail: "GPT-4o + Gemini + Claude via BullMQ/Redis workers — 86 AI interviews processed, anti-cheat detection, Supabase RLS",
    },
    {
      title: "GraphRAG 75% token reduction",
      detail: "4-hop TigerGraph knowledge traversal cut LLM context from 2,500 → 600 tokens while preserving retrieval quality",
    },
    {
      title: "221 organic Chrome installs · 5.0 ★",
      detail: "Trust Layer deployed across US, India, and Germany with production caching, rate limiting, and FastAPI backend",
    },
    {
      title: "CNN + ViT tumor classifier — 98% accuracy, 0.99 ROC-AUC",
      detail: "Multimodal MRI fusion (T1/T2/FLAIR), radiomics extraction, Grad-CAM explainability — IEEE submission under review",
    },
    {
      title: "Deterministic creative engine without generative models",
      detail: "Python + Pillow 4×4 grid saliency system with edge density, hero zone protection, and placement interference scoring — renders 1080×1080, 9:16 Story, and Carousel assets",
    },
    {
      title: "Full-stack AI SaaS shipped solo (Veylix)",
      detail: "FastAPI + Next.js 14 + GPT-4o Vision — 15+ REST endpoints, JWT auth, 3-step campaign wizard, hotel social media creation from hours to under 5 minutes",
    },
  ];

  return (
    <section id="achievements" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <p className="label" style={{ marginBottom: 16 }}>Engineering impact</p>
        <h2 style={{ marginBottom: 40, color: "var(--text)" }}>Selected Achievements</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: 20, alignItems: "flex-start",
              padding: "20px 0",
              borderBottom: i < items.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              {/* Number */}
              <div style={{
                flexShrink: 0, width: 28, height: 28,
                borderRadius: "50%", border: "1px solid var(--border)",
                background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontFamily: "'Poppins', sans-serif", fontWeight: 700,
                color: "var(--text-3)", marginTop: 2,
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: 15, fontFamily: "'Poppins', sans-serif", fontWeight: 600,
                  color: "var(--text)", marginBottom: 6, lineHeight: 1.4,
                }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
