import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const PROJECTS = [
  {
    name: "McDonald's GRNT",
    client: "Accenture",
    description:
      "Full-stack contributor across Gen1 & Gen2 of McDonald's global restaurant operations platform. Delivered a 60% Gen2 frontend performance gain and integrated Claude-driven test automation, CI/CD, and AI code review.",
    tags: ["Next.js", "GraphQL", "AWS AppSync", "Amplify", "Vercel", "Claude AI"],
  },
  {
    name: "Value Case",
    client: "Microsoft · Accenture",
    description:
      "Frontend resource on Microsoft's internal Business Operations KPI platform — built complex dashboards and data-viz components for executive KPI tracking.",
    tags: ["React.js", "Node.js", "REST APIs", "AWS", "Azure Entra ID / SSO"],
  },
  {
    name: "SALT — IVR Management",
    client: "Amazon Germany · Accenture",
    description:
      "Built configuration interfaces and Amazon Connect–integrated workflow components for Amazon Germany's internal IVR management platform.",
    tags: ["React.js", "Node.js", "AWS", "Amazon Connect"],
  },
  {
    name: "Hyblock Capital",
    client: "DiverseLynx",
    description:
      "Core full-stack contributor on Hyblock's crypto trading research platform — real-time data streaming and WebSocket-driven visualizations. Built a gap-fill portal that auto-filled missed candles, cutting work from hours to minutes.",
    tags: ["React.js", "Node.js", "WebSockets", "DynamoDB", "Kafka"],
    url: "https://hyblockcapital.com/",
  },
  {
    name: "Top 22 Picks",
    client: "Freelance",
    description:
      "Designed and built end-to-end as a standalone freelance project — full frontend, backend, and database, deployed to production.",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    url: "https://www.top22picks.com",
  },
  {
    name: "Plant Prefab",
    client: "SmartData",
    description:
      "Contributed as part of the team to a sustainable prefabricated-home builder's web platform, building responsive frontend interfaces and feature components.",
    tags: ["React.js", "Node.js", "JavaScript"],
    url: "https://www.plantprefab.com/",
  },
  {
    name: "theIncircle",
    client: "Freelance",
    description:
      "Built employee, employer, and admin portals for a blue-collar hiring marketplace.",
    tags: ["Next.js", "Node.js", "Express", "Redis"],
    url: "https://www.theincircle.com/employerzone/",
  },
  {
    name: "Restoration Hardware",
    client: "Freelance",
    description:
      "Contributed frontend work for a high-end residential design and hospitality e-commerce site.",
    tags: ["Vue.js", "Node.js", "Express"],
    url: "https://rh.com/us/en/",
  },
];

const Work = () => {
  return (
    <section name="work" className="relative w-full bg-bg section-pad text-muted">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Work"
          subtitle="Key projects across Fortune 500 enterprises and freelance engagements."
        />

        <Reveal
          selector="[data-project]"
          stagger={0.1}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              data-project
              className="group flex h-full flex-col rounded-2xl glass glow-ring p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-fuchsia">
                {project.client}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-heading">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white/5 px-2.5 py-1 text-xs text-heading"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-accent-cyan"
                  >
                    Visit site
                    <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs text-muted">
                    <FiLock /> Internal / enterprise platform
                  </span>
                )}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
