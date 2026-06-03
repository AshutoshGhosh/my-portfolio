import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import GradientOrbs from "./ui/GradientOrbs";

const Home = () => {
  const el = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack Engineer",
        "Frontend Lead",
        "React &amp; Next.js Developer",
      ],
      startDelay: 300,
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1400,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      name="home"
      ref={container}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg"
    >
      <GradientOrbs />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6">
        <p
          data-hero
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-accent-cyan animate-glow-pulse" />
          Available for new opportunities
        </p>

        <h1
          data-hero
          className="font-display text-5xl font-bold leading-[1.05] text-heading sm:text-7xl lg:text-8xl"
        >
          Ashutosh Ghosh
        </h1>

        <h2
          data-hero
          className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-muted">I'm a </span>
          <span ref={el} className="gradient-text" />
        </h2>

        <p
          data-hero
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Full-Stack Software Engineer with 6+ years building scalable,
          high-performance web apps for Fortune 500 enterprises (McDonald's,
          Microsoft, Amazon) and high-growth startups — specialized in React,
          Next.js and Node.js, with a focus on frontend performance and
          AI-augmented development.
        </p>

        <div data-hero className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-80}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-accent-gradient px-7 py-3.5 font-semibold text-white shadow-glow transition-transform duration-300 hover:scale-[1.04]"
          >
            View Work
            <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-flex cursor-pointer items-center gap-3 rounded-full glass px-7 py-3.5 font-semibold text-heading transition-colors duration-300 hover:bg-white/10"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-muted transition-colors hover:text-heading sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <FiArrowDown className="animate-float" />
      </Link>
    </section>
  );
};

export default Home;
