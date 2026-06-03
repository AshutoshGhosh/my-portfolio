import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import ReduxImg from "../assets/redux.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import AWS from "../assets/aws.png";
import ReactQuery from "../assets/reactQuery.png";
import GraphQL from "../assets/graphql.png";

const SKILLS = [
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: ReactImg },
  { name: "Node.js", img: Node },
  { name: "GraphQL", img: GraphQL },
  { name: "Redux", img: ReduxImg },
  { name: "React Query", img: ReactQuery },
  { name: "MongoDB", img: Mongo },
  { name: "Tailwind", img: Tailwind },
  { name: "AWS", img: AWS },
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "GitHub", img: GitHub },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Redux",
      "React Query",
      "Apollo Client",
      "Tailwind CSS",
      "Material UI",
      "Webpack",
      "SSR / SSG",
      "Web Performance",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "JWT",
      "Microservices",
    ],
  },
  {
    title: "Databases & Messaging",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "DynamoDB",
      "Redis",
      "Prisma",
      "Drizzle",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure (Entra ID / SSO)",
      "GCP",
      "Vercel",
      "Docker",
      "CI/CD",
      "Serverless",
      "SAML / SSO",
      "Git",
    ],
  },
  {
    title: "AI-Augmented Dev",
    items: [
      "Claude Code",
      "Cursor",
      "Codex",
      "MCP",
      "AI Test Automation",
      "AI Code Review",
      "Workflow Automation",
    ],
  },
];

const Skills = () => {
  return (
    <section
      name="skills"
      className="relative w-full bg-bg section-pad text-muted"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My toolkit"
          title="Skills"
          subtitle="These are the technologies I've worked with across the stack."
        />

        <Reveal
          selector="[data-skill]"
          stagger={0.06}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              data-skill
              className="group glass glow-ring flex flex-col items-center gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <img
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                src={skill.img}
                alt={`${skill.name} logo`}
              />
              <p className="text-sm font-medium text-heading">{skill.name}</p>
            </div>
          ))}
        </Reveal>

        {/* Full stack, categorized */}
        <Reveal
          selector="[data-group]"
          stagger={0.1}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} data-group className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-fuchsia">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-sm text-heading transition-colors duration-300 hover:border-accent-violet/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
