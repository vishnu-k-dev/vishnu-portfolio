"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 13, fontFamily: "'Poppins', sans-serif", color: "var(--text-3)" }}>
          © {new Date().getFullYear()} Vishnu K
        </span>
        <span style={{ fontSize: 13, fontFamily: "'Poppins', sans-serif", color: "var(--text-3)" }}>
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
