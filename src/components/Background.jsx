import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Subtle dot grid — lighter weight than lines */}
      <div className="bg-dot-grid absolute inset-0" />

      {/* Faint horizontal scan lines for depth */}
      <div className="bg-scan-lines absolute inset-0" />

      {/* Glow blobs — different colours and sizes for depth */}

      {/* Primary — indigo, top right, large, slow */}
      <div className="bg-glow-blob bg-glow-indigo animate-glow-drift-1"
        style={{ top: "-5%", right: "-5%", width: 600, height: 600 }} />

      {/* Secondary — cyan, bottom left */}
      <div className="bg-glow-blob bg-glow-cyan animate-glow-drift-2"
        style={{ bottom: "-10%", left: "-5%", width: 500, height: 500 }} />

      {/* Accent — purple, centre, smaller */}
      <div className="bg-glow-blob bg-glow-purple animate-glow-drift-3"
        style={{ top: "40%", left: "38%", width: 340, height: 340 }} />

      {/* Supporting — indigo tint, mid left */}
      <div className="bg-glow-blob bg-glow-indigo animate-glow-drift-2"
        style={{ top: "30%", left: "-8%", width: 280, height: 280, opacity: 0.5 }} />

      {/* Supporting — cyan tint, top centre */}
      <div className="bg-glow-blob bg-glow-cyan animate-glow-drift-3"
        style={{ top: "-8%", left: "40%", width: 260, height: 260, opacity: 0.4 }} />

      {/* Vignette — darkens edges so content pops */}
      <div className="bg-vignette absolute inset-0" />

    </div>
  );
};

export default Background;