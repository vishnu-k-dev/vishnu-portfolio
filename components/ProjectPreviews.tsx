"use client";

// SVG previews built to match the actual project UIs

export function BrainTumorPreview() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="200" fill="#0f1117" />
      <rect width="400" height="28" fill="#1a1d27" />
      <circle cx="14" cy="14" r="4" fill="#ff5f57" /><circle cx="26" cy="14" r="4" fill="#ffbd2e" /><circle cx="38" cy="14" r="4" fill="#28c840" />
      <rect x="60" y="8" width="200" height="12" rx="3" fill="#252836" />
      <text x="68" y="18" fontSize="8" fill="#5e6278" fontFamily="monospace">brain-tumor-classifier · Flask</text>
      {/* MRI grid */}
      {[0,1,2].map(row => [0,1,2].map(col => (
        <rect key={`${row}-${col}`} x={24 + col * 56} y={38 + row * 50} width={48} height={42} rx="3" fill="#1e2235" />
      )))}
      <rect x={80} y={88} width={48} height={42} rx="3" fill="#2a1a1a" />
      <rect x={80} y={88} width={48} height={42} rx="3" fill="none" stroke="#ef4444" strokeWidth="1.5" />
      <rect x={86} y={94} width={22} height={20} rx="2" fill="rgba(239,68,68,0.25)" />
      <defs><radialGradient id="hm" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f97316" stopOpacity="0.9" /><stop offset="100%" stopColor="transparent" /></radialGradient></defs>
      <ellipse cx={92} cy={104} rx="10" ry="8" fill="url(#hm)" />
      <rect x={204} y={36} width={172} height={152} rx="4" fill="#1a1d27" />
      <text x={214} y={56} fontSize="8" fill="#6b7280" fontFamily="monospace">CLASSIFICATION</text>
      <text x={214} y={72} fontSize="13" fontWeight="bold" fill="#f8fafc" fontFamily="sans-serif">Meningioma</text>
      {[{label:"Meningioma",val:0.92,color:"#3b82f6"},{label:"Glioma",val:0.05,color:"#6b7280"},{label:"Pituitary",val:0.03,color:"#6b7280"}].map((c,i)=>(
        <g key={c.label}>
          <text x={214} y={92+i*24} fontSize="7" fill="#9ca3af" fontFamily="monospace">{c.label}</text>
          <rect x={214} y={96+i*24} width={148} height={6} rx="3" fill="#252836" />
          <rect x={214} y={96+i*24} width={148*c.val} height={6} rx="3" fill={c.color} />
          <text x={368} y={102+i*24} fontSize="7" fill={c.color} fontFamily="monospace" textAnchor="end">{Math.round(c.val*100)}%</text>
        </g>
      ))}
      <rect x={214} y={162} width={72} height={18} rx="9" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="0.8" />
      <text x={250} y={174} fontSize="8" fill="#22c55e" fontFamily="monospace" textAnchor="middle">~98% accuracy</text>
    </svg>
  );
}

// Matches actual CREDA UI: warm bg, "Verify Skills. Accelerate Growth." orange accent
export function CredaPreview() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Warm cream background like actual site */}
      <defs>
        <radialGradient id="credag" cx="70%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#f5f0e8" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#credag)" />
      {/* Navbar */}
      <rect width="400" height="36" fill="rgba(255,255,255,0.8)" />
      {/* CREDA logo */}
      <rect x="16" y="10" width="18" height="18" rx="5" fill="#f97316" />
      <text x="25" y="22" fontSize="8" fill="#fff" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">C</text>
      <text x="40" y="23" fontSize="10" fill="#111" fontFamily="sans-serif" fontWeight="bold">CREDA</text>
      <text x="300" y="23" fontSize="9" fill="#555" fontFamily="sans-serif">Log In</text>
      <rect x="330" y="12" width="60" height="16" rx="4" fill="#111" />
      <text x="360" y="23" fontSize="8" fill="#fff" fontFamily="sans-serif" textAnchor="middle">Get Started</text>
      {/* Hero text */}
      <text x="24" y="68" fontSize="18" fill="#111827" fontFamily="sans-serif" fontWeight="bold">Verify Skills.</text>
      <text x="24" y="92" fontSize="18" fill="#f97316" fontFamily="sans-serif" fontWeight="bold">Accelerate Growth.</text>
      {/* Subtitle */}
      <text x="24" y="112" fontSize="8" fill="#6b7280" fontFamily="sans-serif">CREDA uses AI-powered project interviews to</text>
      <text x="24" y="123" fontSize="8" fill="#6b7280" fontFamily="sans-serif">separate real builders from resume padding.</text>
      {/* Buttons */}
      <rect x="24" y="136" width="110" height="24" rx="6" fill="#111827" />
      <text x="79" y="152" fontSize="8" fill="#fff" fontFamily="sans-serif" textAnchor="middle">Get Started Free →</text>
      <rect x="144" y="136" width="90" height="24" rx="6" fill="#f3f4f6" />
      <text x="189" y="152" fontSize="8" fill="#374151" fontFamily="sans-serif" textAnchor="middle">See How It Works</text>
      {/* Right side — staircase illustration placeholder */}
      <rect x="270" y="44" width="118" height="148" rx="8" fill="#f9f5ef" />
      {[0,1,2,3,4].map(i=>(
        <rect key={i} x={280+i*8} y={80+i*20} width={100-i*16} height={16} rx="2" fill="#e5e0d8" />
      ))}
      <circle cx="340" cy="76" r="10" fill="#fde68a" />
      <text x="340" y="80" fontSize="10" textAnchor="middle">🎓</text>
    </svg>
  );
}

// Matches actual Trust Layer UI: browser + extension popup
export function TrustLayerPreview() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="200" fill="#f8fafc" />
      <rect width="400" height="32" fill="#e2e8f0" />
      <circle cx="16" cy="16" r="5" fill="#fc8181" /><circle cx="30" cy="16" r="5" fill="#f6e05e" /><circle cx="44" cy="16" r="5" fill="#68d391" />
      <rect x="60" y="8" width="240" height="16" rx="8" fill="#fff" stroke="#cbd5e0" strokeWidth="1" />
      <text x="72" y="20" fontSize="8" fill="#718096" fontFamily="monospace">🔒 facebook.com/privacy</text>
      <rect x="230" y="36" width="158" height="152" rx="8" fill="#1e293b" />
      <text x="246" y="58" fontSize="10" fill="#f8fafc" fontFamily="sans-serif" fontWeight="bold">Trust Layer</text>
      <text x="246" y="70" fontSize="7" fill="#94a3b8" fontFamily="sans-serif">Privacy Risk Score</text>
      <circle cx="309" cy="105" r="30" fill="none" stroke="#1e3a5f" strokeWidth="6" />
      <circle cx="309" cy="105" r="30" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="141" strokeDashoffset="42" strokeLinecap="round" transform="rotate(-90 309 105)" />
      <text x="309" y="100" fontSize="18" fill="#ef4444" fontFamily="monospace" fontWeight="bold" textAnchor="middle">7.2</text>
      <text x="309" y="112" fontSize="7" fill="#94a3b8" fontFamily="sans-serif" textAnchor="middle">/ 10</text>
      <text x="309" y="122" fontSize="7" fill="#ef4444" fontFamily="sans-serif" textAnchor="middle">HIGH RISK</text>
      {["Sells to 3rd parties","No deletion right","Broad data scope"].map((r,i)=>(
        <text key={r} x="246" y={148+i*13} fontSize="7" fill="#f87171" fontFamily="sans-serif">✗ {r}</text>
      ))}
      <rect x="10" y="40" width="210" height="148" rx="4" fill="#fff" />
      <rect x="20" y="52" width="140" height="10" rx="3" fill="#e2e8f0" />
      {[68,80,92,104].map(y=><rect key={y} x="20" y={y} width="170" height="6" rx="3" fill="#f1f5f9" />)}
      <text x="20" y="130" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Privacy Policy</text>
      {[136,147,158].map(y=><rect key={y} x="20" y={y} width="170" height="5" rx="2" fill="#f1f5f9" />)}
      <text x="20" y="180" fontSize="7" fill="#4f8ef7" fontFamily="sans-serif">200+ users · Chrome Web Store</text>
    </svg>
  );
}

// Matches actual Thermal Analyzer UI: light purple dotted bg, upload panel
export function ThermalPreview() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Light bg with dot grid like actual UI */}
      <rect width="400" height="200" fill="#f0f0f8" />
      {/* Dot grid */}
      {Array.from({length:12},(_,row)=>Array.from({length:20},(_,col)=>(
        <circle key={`${row}-${col}`} cx={10+col*21} cy={10+row*18} r="1" fill="#c8c8e0" opacity="0.6" />
      )))}
      {/* Navbar */}
      <rect width="400" height="32" fill="rgba(255,255,255,0.9)" />
      <circle cx="18" cy="16" r="5" fill="#22c55e" />
      <text x="30" y="21" fontSize="9" fill="#1e1b4b" fontFamily="sans-serif" fontWeight="bold">Thermal Analyzer</text>
      <rect x="290" y="8" width="100" height="18" rx="9" fill="#e8e8f4" />
      <text x="340" y="20" fontSize="7" fill="#4338ca" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">ResNet-18 + Bi-LSTM</text>
      {/* Left content */}
      <rect x="14" y="48" width="120" height="14" rx="7" fill="#e8e8f4" />
      <text x="22" y="58" fontSize="7" fill="#f59e0b" fontFamily="sans-serif">⚡ CNN-Based Pattern Analysis</text>
      <text x="14" y="82" fontSize="16" fill="#1e1b4b" fontFamily="sans-serif" fontWeight="bold">Detect Thermal</text>
      <text x="14" y="100" fontSize="16" fill="#6366f1" fontFamily="sans-serif" fontWeight="bold">Anomalies</text>
      <text x="14" y="116" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Upload an infrared thermal image and</text>
      <text x="14" y="126" fontSize="7" fill="#6b7280" fontFamily="sans-serif">instantly detect abnormal heat patterns.</text>
      {/* Watch demo button */}
      <circle cx="26" cy="146" r="10" fill="#1e1b4b" />
      <text x="26" y="150" fontSize="8" fill="#fff" fontFamily="sans-serif" textAnchor="middle">▶</text>
      <text x="42" y="150" fontSize="8" fill="#1e1b4b" fontFamily="sans-serif" fontWeight="600">Watch Project Demo</text>
      {/* Sample labels */}
      <text x="14" y="170" fontSize="6" fill="#9ca3af" fontFamily="sans-serif" letterSpacing="1">TRY A SAMPLE</text>
      {["FLIR0150","FLIR0152","FLIR0154"].map((l,i)=>(
        <g key={l}>
          <rect x={14+i*62} y={174} width={54} height={14} rx="4" fill="#fff" stroke="#d1d5db" strokeWidth="0.8" />
          <text x={41+i*62} y={184} fontSize="6" fill="#374151" fontFamily="monospace" textAnchor="middle">{l}</text>
        </g>
      ))}
      {/* Right upload panel */}
      <rect x="220" y="40" width="168" height="148" rx="8" fill="#fff" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 2" />
      <rect x="258" y="68" width="44" height="44" rx="10" fill="#f3f4f6" />
      <text x="280" y="96" fontSize="18" fill="#6b7280" fontFamily="sans-serif" textAnchor="middle">↑</text>
      <text x="304" y="128" fontSize="9" fill="#111827" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Drop your thermal</text>
      <text x="304" y="140" fontSize="9" fill="#111827" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">image here</text>
      <text x="304" y="153" fontSize="7" fill="#9ca3af" fontFamily="sans-serif" textAnchor="middle">Supports JPG, PNG, BMP, TIFF</text>
      <rect x="244" y="160" width="120" height="20" rx="6" fill="#1e1b4b" />
      <text x="304" y="174" fontSize="8" fill="#fff" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">↑ Choose File</text>
    </svg>
  );
}

// Aarna — Blue Carbon on Algorand: ocean/wave bg, "Blue Carbon, Verified On-Chain"
export function AarnaPreview() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0e7490" />
          <stop offset="50%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#ocean)" />
      {/* Wave shapes */}
      <path d="M0 120 Q50 90 100 110 Q150 130 200 105 Q250 80 300 100 Q350 120 400 95 L400 200 L0 200 Z" fill="rgba(255,255,255,0.07)" />
      <path d="M0 140 Q60 115 120 135 Q180 155 240 125 Q300 100 360 120 L400 110 L400 200 L0 200 Z" fill="rgba(255,255,255,0.05)" />
      {/* Navbar */}
      <rect width="400" height="36" fill="rgba(30,30,40,0.7)" />
      <circle cx="18" cy="18" r="7" fill="#14b8a6" />
      <text x="18" y="22" fontSize="7" fill="#fff" fontFamily="sans-serif" textAnchor="middle">🌊</text>
      <text x="32" y="22" fontSize="9" fill="#e2e8f0" fontFamily="sans-serif" fontWeight="bold">Aarna</text>
      {["Home","Developer","Marketplace","Registry"].map((l,i)=>(
        <text key={l} x={80+i*72} y={22} fontSize="8" fill="#9ca3af" fontFamily="sans-serif">{l}</text>
      ))}
      <rect x="330" y="10" width="58" height="18" rx="6" fill="#14b8a6" />
      <text x="359" y="22" fontSize="7" fill="#fff" fontFamily="sans-serif" textAnchor="middle">⊕ Connect</text>
      {/* Badge */}
      <rect x="130" y="44" width="140" height="18" rx="9" fill="rgba(0,0,0,0.5)" />
      <text x="200" y="56" fontSize="7" fill="#e2e8f0" fontFamily="sans-serif" textAnchor="middle">🛡 Decentralized MRV on Algorand</text>
      {/* Hero text */}
      <text x="200" y="88" fontSize="22" fill="#e2e8f0" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Blue Carbon,</text>
      <text x="200" y="114" fontSize="22" fill="#f97316" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Verified On-Chain</text>
      {/* Subtitle */}
      <text x="200" y="132" fontSize="7" fill="#cbd5e1" fontFamily="sans-serif" textAnchor="middle">India's first decentralized MRV platform — monitoring,</text>
      <text x="200" y="142" fontSize="7" fill="#cbd5e1" fontFamily="sans-serif" textAnchor="middle">reporting, and verifying coastal ecosystem restoration.</text>
      {/* Buttons */}
      <rect x="80" y="154" width="104" height="22" rx="6" fill="#14b8a6" />
      <text x="132" y="168" fontSize="8" fill="#fff" fontFamily="sans-serif" textAnchor="middle">⊕ Explore Registry</text>
      <rect x="196" y="154" width="100" height="22" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="246" y="168" fontSize="8" fill="#e2e8f0" fontFamily="sans-serif" textAnchor="middle">For Developers →</text>
    </svg>
  );
}
