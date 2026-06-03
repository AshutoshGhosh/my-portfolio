import React from "react";
import useReveal from "./useReveal";

/**
 * Wrapper that scroll-reveals its direct children with a staggered fade-up.
 * Usage: <Reveal className="...">{children}</Reveal>
 */
const Reveal = ({
  as: Tag = "div",
  className = "",
  children,
  y,
  stagger,
  duration,
  start,
  selector,
  ...rest
}) => {
  const ref = useReveal({ y, stagger, duration, start, selector });
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
