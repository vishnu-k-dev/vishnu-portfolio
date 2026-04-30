import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishnu K — AI/ML Engineer",
  description: "AI/ML Engineer building production systems across computer vision, LLMs, and ML pipelines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
