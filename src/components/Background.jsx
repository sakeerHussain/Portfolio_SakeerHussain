// src/components/Background.jsx
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="bg-grid absolute inset-0"></div>

      {/* Static Glow Elements */}
      <div className="bg-glow top-20 right-40"></div>
      <div className="bg-glow bottom-20 left-40"></div>
      <div className="bg-glow top-1/2 left-1/3"></div>
    </div>
  );
};

export default Background;
