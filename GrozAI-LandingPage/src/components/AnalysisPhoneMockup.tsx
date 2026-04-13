export default function AnalysisPhoneMockup() {
  const green = "#4ade80";
  const bg = "#0a0a0a";
  const card = "#161616";
  const border = "rgba(255,255,255,0.07)";
  const muted = "rgba(255,255,255,0.42)";

  const nutrients = [
    { label: "Fiber", level: "High", bar: 78, color: green },
    { label: "Sugar", level: "Low", bar: 22, color: green },
    { label: "Protein", level: "Medium", bar: 48, color: "#60a5fa" },
    { label: "Sodium", level: "Moderate", bar: 55, color: "#f59e0b" },
    { label: "Sat. Fat", level: "Low", bar: 18, color: green },
  ];

  return (
    <div style={{ background: bg, height: "100%", fontFamily: "'Inter', sans-serif", color: "#fff", display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <div style={{ padding: "12px 16px 0", display: "flex", justifyContent: "space-between", fontSize: "10px", opacity: 0.45, flexShrink: 0 }}>
        <span style={{ fontWeight: 600 }}>9:41</span>
        <span>●●● WiFi 100%</span>
      </div>

      {/* Header */}
      <div style={{ padding: "10px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <div style={{ fontSize: "17px", fontWeight: 800, letterSpacing: "-0.02em" }}>Scan Result</div>
        <div style={{ fontSize: "8px", color: muted, background: "#1e1e1e", border: `1px solid ${border}`, borderRadius: "20px", padding: "3px 9px", fontWeight: 600, letterSpacing: "0.06em" }}>BARCODE</div>
      </div>

      {/* Score card */}
      <div style={{ margin: "10px 12px 0", background: "linear-gradient(135deg, #0d1f0d 0%, #141a14 100%)", borderRadius: "16px", padding: "12px 14px", border: "1px solid rgba(74,222,128,0.14)", flexShrink: 0, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 70, height: 70, background: "rgba(74,222,128,0.1)", borderRadius: "50%", filter: "blur(18px)" }} />
        <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Whole Grain Bread</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>Health Score</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
              <span style={{ fontSize: "34px", fontWeight: 800, color: green, lineHeight: 1, letterSpacing: "-0.03em" }}>7.8</span>
              <span style={{ fontSize: "11px", color: muted }}>/10</span>
            </div>
          </div>
          <div style={{ background: "rgba(74,222,128,0.13)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "12px", padding: "8px 12px", textAlign: "center" }}>
            <div style={{ fontSize: "16px", fontWeight: 800, color: green, letterSpacing: "-0.01em" }}>GOOD</div>
            <div style={{ fontSize: "8px", color: muted, marginTop: "1px" }}>for your goal</div>
          </div>
        </div>
      </div>

      {/* Nutrient breakdown */}
      <div style={{ margin: "8px 12px 0", background: card, borderRadius: "16px", padding: "12px 14px", border: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "9px", fontWeight: 600 }}>Breakdown</div>
        {nutrients.map((n) => (
          <div key={n.label} style={{ marginBottom: "7px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span style={{ fontSize: "11px", fontWeight: 500 }}>{n.label}</span>
              <span style={{ fontSize: "9px", color: n.color, fontWeight: 600 }}>{n.level}</span>
            </div>
            <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: `${n.bar}%`, height: "100%", background: n.color, borderRadius: "3px" }} />
            </div>
          </div>
        ))}
      </div>

      {/* GrozAI Recommendation */}
      <div style={{ margin: "8px 12px 0", background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.14)", borderRadius: "14px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "9px", flexShrink: 0 }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "13px" }}>↑</div>
        <div>
          <div style={{ fontSize: "8px", color: green, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px", fontWeight: 700 }}>GrozAI Recommendation</div>
          <div style={{ fontSize: "11px", fontWeight: 600 }}>Consider Ezekiel Bread</div>
          <div style={{ fontSize: "9px", color: muted, marginTop: "1px" }}>+8g protein · lower glycemic index</div>
        </div>
      </div>

    </div>
  );
}
