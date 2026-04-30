"use client";
import { useState, useRef, useEffect } from "react";

interface Message { role: "user" | "assistant"; text: string; }

const STARTERS = ["What's your strongest project?", "Are you open to internships?", "Tell me about CREDA", "What's your tech stack?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hey — ask me anything about Vishnu's projects, skills, or experience." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text }) });
      const data = await res.json();
      setMessages(m => [...m, { role: "assistant", text: data.reply || "Try emailing vishnuk2006@protonmail.com directly." }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", text: "API not set up yet — email vishnuk2006@protonmail.com!" }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Trigger */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 100,
        background: "var(--text)", color: "var(--bg)",
        border: "none", borderRadius: 8, padding: "10px 18px",
        fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13,
        cursor: "pointer",
      }}>
        {open ? "Close" : "Ask Vishnu"}
      </button>

      {/* Window */}
      {open && (
        <div style={{
          position: "fixed", bottom: 72, right: 24, zIndex: 99,
          width: "min(360px, calc(100vw - 40px))",
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: 10, overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          display: "flex", flexDirection: "column",
        }}>
          {/* Header */}
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: "var(--text)" }}>Ask Vishnu</div>
            <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>AI-powered · knows his full profile</div>
          </div>

          {/* Messages */}
          <div style={{ overflowY: "auto", padding: "12px 14px", maxHeight: 260, display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "82%", padding: "9px 13px", borderRadius: 8,
                  background: m.role === "user" ? "var(--text)" : "var(--bg-card)",
                  color: m.role === "user" ? "var(--bg)" : "var(--text)",
                  border: m.role === "assistant" ? "1px solid var(--border)" : "none",
                  fontSize: 13, lineHeight: 1.55,
                  fontFamily: "'Lora', serif",
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ padding: "9px 13px", borderRadius: 8, background: "var(--bg-card)", border: "1px solid var(--border)", fontSize: 13, color: "var(--text-3)" }}>···</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Starters */}
          {messages.length === 1 && (
            <div style={{ padding: "0 12px 10px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {STARTERS.map(s => (
                <button key={s} onClick={() => send(s)} style={{
                  fontSize: 11, padding: "5px 10px", borderRadius: 5,
                  background: "var(--bg-subtle)", border: "1px solid var(--border)",
                  color: "var(--text-2)", cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                }}>{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "10px 12px", borderTop: "1px solid var(--border)", display: "flex", gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send(input)}
              placeholder="Ask anything..."
              style={{
                flex: 1, background: "var(--bg-subtle)", border: "1px solid var(--border)",
                borderRadius: 6, padding: "8px 12px", color: "var(--text)", fontSize: 13,
                outline: "none", fontFamily: "'Lora', serif",
              }}
            />
            <button onClick={() => send(input)} disabled={loading || !input.trim()} style={{
              background: "var(--text)", border: "none", borderRadius: 6,
              padding: "8px 14px", color: "var(--bg)", cursor: "pointer",
              fontSize: 14, fontWeight: 600, opacity: (!input.trim() || loading) ? 0.4 : 1,
              fontFamily: "'Poppins', sans-serif",
            }}>↑</button>
          </div>
        </div>
      )}
    </>
  );
}
