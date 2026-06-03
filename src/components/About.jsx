import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const STATS = [
  { value: "6+", label: "Years of experience" },
  { value: "3", label: "Fortune 500 clients" },
  { value: "60%", label: "Frontend perf gain" },
  { value: "7", label: "Team members led" },
];

const About = () => {
  return (
    <section
      name="about"
      className="relative w-full bg-bg section-pad text-muted"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get to know me"
          title="About"
          subtitle="Hi, I'm Ashutosh — nice to meet you. Here's a little about what I do."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold leading-snug text-heading sm:text-3xl">
              A frontend-heavy{" "}
              <span className="gradient-text-static">Full-Stack Engineer</span>{" "}
              shipping for Fortune 500s and startups.
            </h3>
          </Reveal>

          <Reveal className="space-y-5 text-base leading-relaxed sm:text-lg lg:col-span-3">
            <p>
              I'm a Full-Stack Software Engineer with 6+ years delivering
              scalable, high-performance web apps for Fortune 500 enterprises —
              McDonald's, Microsoft and Amazon — as well as high-growth startups.
              I specialize in React.js, Next.js, Vue.js and Node.js, with deep
              expertise in frontend performance, system architecture and
              AI-augmented development.
            </p>
            <p>
              I've led a 7-member cross-functional team, driven a 60% frontend
              performance gain on a global enterprise platform, and shipped
              client-ready solutions in fast-paced Agile environments. I lean on
              AI tools (Claude Code, Cursor, MCP) to automate workflows and
              accelerate engineering velocity. Let's connect and build something
              remarkable.
            </p>
          </Reveal>
        </div>

        {/* Stat strip */}
        <Reveal
          selector="[data-stat]"
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              data-stat
              className="glass glow-ring rounded-2xl p-6 text-center"
            >
              <div className="font-display text-4xl font-bold gradient-text-static">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
