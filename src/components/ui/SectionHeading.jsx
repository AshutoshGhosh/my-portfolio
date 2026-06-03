import React from "react";

/**
 * Unified section heading: small eyebrow label, large display title, optional
 * subtitle. Replaces the duplicated "title + underline + subtitle" pattern.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-fuchsia">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-heading">
        {title}
      </h2>
      <span className="h-1 w-16 rounded-full bg-accent-gradient" />
      {subtitle && (
        <p className="max-w-2xl text-muted text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
