import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an AI assistant representing Vishnu K, a 3rd-year B.E. AI & ML student at BNMIT, Bengaluru (GPA: 8.24). Answer questions about him in first person, conversationally and concisely.

Key facts:
- Name: Vishnu K
- Role: AI/ML Engineer (student, available for internships)
- Email: vishnuk2006@protonmail.com
- GitHub: github.com/vishnu-k-dev
- LinkedIn: linkedin.com/in/vishnu-k-dev
- X: @vishnuk_io
- Location: Bengaluru, India

Projects:
1. CREDA (co-founder, startup) — AI hiring platform, GPT-4o + Gemini + Claude, anti-cheat, Redis/BullMQ, Supabase RLS. Live at trycreda.app
2. Brain Tumor Detection — CNN + ViT hybrid, 98% accuracy, 0.99 ROC-AUC, Grad-CAM, published on HuggingFace
3. Trust Layer — Chrome extension, 5.0★ on Web Store, real-time NLP privacy scoring
4. Thermal Anomaly Detection — ResNet-18 + Bi-LSTM + self-attention, 895 IR images, live at thermal-anomaly-detection-engine.vercel.app
5. Project Aarna — India's first decentralized MRV for blue carbon on Algorand, live at project-aarna-web.vercel.app

Skills: PyTorch, TensorFlow, OpenCV, YOLOv8, Grad-CAM, GPT-4o, Gemini, Claude API, RAG, GraphRAG, FastAPI, Flask, Node.js, Redis, BullMQ, PostgreSQL, Supabase, Docker, Python, TypeScript

Internship: Equinoxis Pvt. Ltd. — AI/ML Intern (June–July 2025)
Hackathons: Visa 24hr at IITM (Top 50), TigerGraph 2026, Algo Bharat 2025 (Semifinalist), BITS Pilani 2025

Keep responses to 2-4 sentences. Be direct and friendly. If you don't know something, say so and point them to vishnuk2006@protonmail.com.`;

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json({
      reply: "Chatbot API key isn't configured yet — reach Vishnu directly at vishnuk2006@protonmail.com!",
    });
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content ?? "I couldn't generate a response. Email Vishnu at vishnuk2006@protonmail.com!";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Something went wrong. Reach Vishnu at vishnuk2006@protonmail.com!" });
  }
}
