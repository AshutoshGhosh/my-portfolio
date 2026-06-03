import React from "react";

/**
 * Animated blurred gradient background blobs — the "premium glow" backdrop.
 * Purely decorative and pointer-transparent; sits behind section content.
 */
const GradientOrbs = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-orb-violet blur-3xl animate-aurora" />
      <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-orb-fuchsia blur-3xl animate-aurora [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] rounded-full bg-orb-cyan blur-3xl animate-aurora [animation-delay:8s]" />
    </div>
  );
};

export default GradientOrbs;
