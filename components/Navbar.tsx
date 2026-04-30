"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
        {/* Logo */}
        <a href="#top" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 16, color: "var(--text)", letterSpacing: "-0.01em" }}>
          Vishnu K
        </a>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map(n => (
            <a key={n.href} href={n.href} style={{ fontSize: 14, fontFamily: "'Poppins', sans-serif", color: "var(--text-2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
            >
              {n.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button onClick={toggle} style={{
            background: "none", border: "1px solid var(--border)", borderRadius: 6,
            padding: "5px 10px", cursor: "pointer", fontSize: 14, color: "var(--text-3)",
            fontFamily: "'Poppins', sans-serif",
          }}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}
