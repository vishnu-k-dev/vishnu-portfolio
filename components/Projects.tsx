"use client";
import Image from "next/image";

const projects = [
  {
    title: "CREDA",
    type: "LLM Pipeline · Startup",
    description: "Co-founded. AI hiring platform separating real builders from resume padding — analyzes resumes and GitHub repos using GPT-4o, Gemini, and Claude. Anti-cheat detection, Skill Passports, Redis job queues.",
    metric: "Co-founder · 3-model AI pipeline",
    stack: "GPT-4o · Gemini · Claude · Supabase · BullMQ · Redis",
    github: "https://github.com/vishnu-k-dev/CREDA",
    live: "https://www.trycreda.app",
    preview: "/preview-creda.png",
    eager: true,
  },
  {
    title: "Brain Tumor Detection",
    type: "Computer Vision · Deep Learning",
    description: "Hybrid CNN + Vision Transformer for MRI-based multi-class tumor classification. Multimodal fusion (T1/T2/FLAIR), radiomics feature extraction, and Grad-CAM explainability. Published on HuggingFace.",
    metric: "98% accuracy · 0.99 ROC-AUC · 32 downloads/mo",
    stack: "PyTorch · ViT · Grad-CAM · OpenCV · Scikit-learn",
    github: "https://huggingface.co/Zorrojurro/brain-tumor-cnn-vit",
    githubLabel: "HuggingFace ↗",
    live: null,
    preview: "/preview-brain-tumor.png",
    eager: false,
  },
  {
    title: "Trust Layer",
    type: "NLP · Browser Extension",
    description: "Chrome extension + FastAPI backend that scores website privacy policies 1–10 in real time using NLP. 5.0 ★ on Chrome Web Store. Built production caching and rate limiting.",
    metric: "5.0 ★ · Privacy & Security category",
    stack: "FastAPI · OpenAI · BeautifulSoup · Chrome MV3",
    github: "https://github.com/vishnu-k-dev/trust-layer-backend",
    live: "https://chromewebstore.google.com/detail/trust-layer/pdaeghgikdefhjmpfnknponehopmeenc",
    liveLabel: "Chrome Store ↗",
    preview: "/preview-trust-layer.png",
    eager: false,
  },
  {
    title: "Thermal Anomaly Detection",
    type: "Anomaly Detection · CV",
    description: "ResNet-18 + Bi-LSTM with self-attention for detecting heat anomalies in power transformer IR images. Cosine similarity scoring with Grad-CAM visualization. Trained on 895 real SciDB IR images.",
    metric: "895 real IR images · SciDB dataset",
    stack: "PyTorch · ResNet-18 · Bi-LSTM · OpenCV · Flask",
    github: "https://github.com/vishnu-k-dev",
    live: "https://thermal-anomaly-detection-engine.vercel.app/",
    preview: "/preview-thermal.png",
    eager: false,
  },
  {
    title: "Project Aarna",
    type: "Blockchain · Climate Tech",
    description: "India's first decentralized MRV platform for blue carbon credits on Algorand. Communities submit coastal restoration evidence on IPFS, validators approve on-chain, and AARNA tokens are minted as carbon credits — fully auditable, no middlemen.",
    metric: "End-to-end on-chain · Algorand blockchain",
    stack: "Algorand SDK · React · TypeScript · Pera Wallet · IPFS",
    github: "https://github.com/vishnu-k-dev/project-aarna",
    live: "https://project-aarna-web.vercel.app/",
    preview: "/preview-aarna.png",
    eager: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="label" style={{ marginBottom: 16 }}>Work</p>
        <h2 style={{ marginBottom: 40, color: "var(--text)", lineHeight: 1.2 }}>
          Recent Projects <span style={{ color: "var(--accent)" }}>&amp; Achievements</span>
        </h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: 200, overflow: "hidden", borderBottom: "1px solid var(--border)", position: "relative", background: "var(--bg-subtle)" }}>
                <Image
                  src={p.preview}
                  alt={`${p.title} preview`}
                  fill
                  loading={p.eager ? "eager" : "lazy"}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div style={{ padding: "18px 20px 20px" }}>
                <p className="label" style={{ marginBottom: 8 }}>{p.type}</p>

                {/* Title row with Live link inline */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, color: "var(--text)", margin: 0 }}>{p.title}</h3>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      style={{
                        fontSize: 11, fontFamily: "'Poppins', sans-serif",
                        color: "var(--accent)", fontWeight: 700,
                        background: "var(--bg-subtle)", border: "1px solid var(--border)",
                        borderRadius: 4, padding: "2px 7px", textDecoration: "none",
                        flexShrink: 0, lineHeight: 1.6,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      {"liveLabel" in p ? p.liveLabel : "Live ↗"}
                    </a>
                  )}
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.65, marginBottom: 14, color: "var(--text-2)" }}>{p.description}</p>

                <div style={{
                  display: "inline-block", background: "var(--bg-subtle)",
                  borderRadius: 5, padding: "3px 10px", marginBottom: 14,
                  fontSize: 12, fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600, color: "var(--text-2)",
                }}>
                  {p.metric}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                  <p style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "'Poppins', sans-serif", margin: 0 }}>{p.stack}</p>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ fontSize: 12, fontFamily: "'Poppins', sans-serif", color: "var(--text-3)", flexShrink: 0, marginLeft: 12 }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
                  >
                    {"githubLabel" in p ? p.githubLabel : "GitHub ↗"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
