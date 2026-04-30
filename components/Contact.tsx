"use client";

const links = [
  { label: "Email", value: "vishnuk2006@protonmail.com", href: "mailto:vishnuk2006@protonmail.com" },
  { label: "GitHub", value: "github.com/vishnu-k-dev", href: "https://github.com/vishnu-k-dev/" },
  { label: "LinkedIn", value: "linkedin.com/in/vishnu-k-dev", href: "https://www.linkedin.com/in/vishnu-k-dev/" },
  { label: "X / Twitter", value: "@vishnuk_io", href: "https://x.com/vishnuk_io" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <p className="label" style={{ marginBottom: 16 }}>Get in touch</p>
        <h2 style={{ marginBottom: 16, color: "var(--text)" }}>Let&apos;s work together</h2>
        <p style={{ maxWidth: 480, marginBottom: 40 }}>
          Open to AI/ML internships, research collaborations, and interesting projects. I respond fast.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10, marginBottom: 32 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              style={{ display: "block", padding: "16px 18px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, textDecoration: "none", transition: "border-color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div className="label" style={{ marginBottom: 6 }}>{l.label}</div>
              <div style={{ fontSize: 13, fontFamily: "'Poppins', sans-serif", color: "var(--accent)", fontWeight: 500 }}>{l.value}</div>
            </a>
          ))}
        </div>

        <a href="mailto:vishnuk2006@protonmail.com" className="btn btn-accent">Send an email</a>
      </div>
    </section>
  );
}
