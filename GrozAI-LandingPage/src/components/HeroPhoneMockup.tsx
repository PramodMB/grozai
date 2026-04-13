export default function HeroPhoneMockup() {
  const green = "#4ade80";
  const bg = "#0a0a0a";
  const card = "#161616";
  const border = "rgba(255,255,255,0.07)";
  const muted = "rgba(255,255,255,0.42)";

  return (
    <div style={{ background: bg, height: "100%", fontFamily: "'Inter', sans-serif", color: "#fff", display: "flex", flexDirection: "column", padding: "0" }}>

      {/* Status bar */}
      <div style={{ padding: "12px 16px 0", display: "flex", justifyContent: "space-between", fontSize: "10px", opacity: 0.45, flexShrink: 0 }}>
        <span style={{ fontWeight: 600 }}>9:41</span>
        <span>●●● WiFi 100%</span>
      </div>

      {/* Greeting */}
      <div style={{ padding: "10px 16px 0", flexShrink: 0 }}>
        <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: green, marginBottom: "4px" }}>
          Good morning
        </div>
        <div style={{ fontSize: "17px", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
          Your grocery plan<br />is ready
        </div>
      </div>

      {/* Active Goal card */}
      <div style={{ margin: "10px 12px 0", background: card, borderRadius: "16px", padding: "12px 14px", border: `1px solid ${border}`, flexShrink: 0, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -16, right: -16, width: 60, height: 60, background: "rgba(74,222,128,0.1)", borderRadius: "50%", filter: "blur(16px)" }} />
        <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>Active Goal</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ fontSize: "15px", fontWeight: 700 }}>Fat Loss</span>
          <span style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "20px", padding: "2px 8px", fontSize: "8px", fontWeight: 700, color: green, whiteSpace: "nowrap" }}>ON TRACK</span>
        </div>
        <div style={{ height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ width: "68%", height: "100%", background: `linear-gradient(to right, ${green}, #22c55e)`, borderRadius: "4px" }} />
        </div>
        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "9px", color: muted }}>68% towards weekly goal</span>
          <span style={{ fontSize: "9px", color: green, fontWeight: 600 }}>68%</span>
        </div>
      </div>

      {/* GrozAI Suggestions */}
      <div style={{ margin: "8px 12px 0", background: card, borderRadius: "16px", padding: "12px 14px", border: `1px solid ${border}`, flexShrink: 0 }}>
        <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", fontWeight: 600 }}>GrozAI Suggestions</div>
        {[
          { item: "Add Spinach", reason: "Iron deficiency detected", color: green },
          { item: "Swap to Greek Yogurt", reason: "+12g protein boost", color: "#60a5fa" },
          { item: "Replace White Rice", reason: "Better fiber alternative", color: "#f59e0b" },
        ].map((s) => (
          <div key={s.item} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: `${s.color}18`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: s.color }} />
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, lineHeight: 1.2 }}>{s.item}</div>
              <div style={{ fontSize: "9px", color: muted, marginTop: "1px" }}>{s.reason}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Score */}
      <div style={{ margin: "8px 12px 0", background: card, borderRadius: "16px", padding: "12px 14px", border: `1px solid ${border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>Weekly Score</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: green, lineHeight: 1, letterSpacing: "-0.02em" }}>8.4</span>
            <span style={{ fontSize: "10px", color: muted }}>/10</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "8px", color: muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>Needs Attention</div>
          <div style={{ fontSize: "12px", fontWeight: 600 }}>Iron, Fiber</div>
          <div style={{ fontSize: "9px", color: "#fbbf24", marginTop: "2px" }}>GrozAI is correcting this</div>
        </div>
      </div>

    </div>
  );
}
