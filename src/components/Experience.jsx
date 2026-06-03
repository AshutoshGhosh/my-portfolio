import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

import accenture from "../assets/firms/Accenture-logo.png";
import diverse from "../assets/firms/diverse-logo.png";
import smartdata from "../assets/firms/smartdata-logo.png";
import ith from "../assets/firms/ith-logo.png";

const EXPERIENCES = [
  {
    name: "Accenture",
    logo: accenture,
    designation: "Senior Analyst — Senior Full-Stack Engineer / Frontend Lead",
    duration: "Jan 2022 – Present",
    location: "Noida, India",
    jobIncludes: [
      "Promoted to Senior Analyst for sustained high-impact delivery; recognized 6+ times for client value, technical excellence, and security leadership.",
      "Led a 7-member cross-functional frontend team across Fortune 500 engagements — owning technical direction, mentorship, hiring interviews, and Agile delivery.",
      "Drove a 60% frontend performance improvement on McDonald's GRNT through code-splitting, lazy loading, and rendering optimizations.",
      "Architected SAML-based SSO via Azure Entra ID and AWS Identity Center across multiple internal projects, standardizing enterprise authentication.",
      "Served as Project Lead and primary client point-of-contact, deploying React/Next.js apps across AWS, Azure, and GCP with Docker, CI/CD, Kafka, and Redis.",
    ],
  },
  {
    name: "DiverseLynx India Pvt Ltd",
    logo: diverse,
    designation: "Senior Software Engineer (MERN)",
    duration: "Jul 2021 – Jan 2022",
    location: "Noida, India",
    jobIncludes: [
      "Senior full-stack contributor on Hyblock Capital's crypto-trading research platform — built real-time WebSocket features for low-latency trading data.",
      "Engineered internal data-integrity automation tooling that cut manual gap-fill work from hours to minutes.",
      "Designed RESTful APIs and optimized real-time data pipelines with DynamoDB and Kafka.",
    ],
  },
  {
    name: "SmartData Enterprises Inc",
    logo: smartdata,
    designation: "Associate Delivery Level III",
    duration: "Oct 2020 – Jul 2021",
    location: "Dehradun, India",
    jobIncludes: [
      "Spearheaded the end-to-end development lifecycle of web applications using the MERN stack, owning delivery from requirements through production.",
      "Designed and implemented scalable architecture, optimizing application performance and ensuring smooth functionality.",
      "Collaborated closely with product owners and stakeholders, translating business requirements into technical specifications.",
      "Mentored and coached junior developers, fostering a collaborative and growth-oriented team environment.",
    ],
  },
  {
    name: "IT Hours Solutions Ltd",
    logo: ith,
    designation: "Software Developer",
    duration: "Jul 2019 – Sep 2020",
    location: "Noida, India",
    jobIncludes: [
      "Built dynamic web applications using React.js, Vue.js, and Node.js.",
      "Developed React Native mobile apps with MongoDB/MySQL data layers.",
      "Recognized as Employee of the Month for 3 consecutive months for consistent delivery quality.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      name="experience"
      className="relative w-full bg-bg section-pad text-muted"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          subtitle="Collaborating with notable companies in web and mobile development."
        />

        {/* Vertical timeline */}
        <Reveal
          selector="[data-exp]"
          stagger={0.15}
          className="relative mt-14 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-full before:w-px before:bg-line md:before:left-1/2"
        >
          {EXPERIENCES.map((exp, i) => (
            <article
              key={exp.name}
              data-exp
              className="relative md:grid md:grid-cols-2 md:gap-12"
            >
              {/* Node dot */}
              <span className="absolute left-0 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent-fuchsia bg-bg md:left-1/2" />

              <div
                className={`pl-8 md:pl-0 ${
                  i % 2 === 0
                    ? "md:col-start-1 md:pr-12 md:text-right"
                    : "md:col-start-2 md:pl-12"
                }`}
              >
                <div className="glass glow-ring rounded-2xl p-6">
                  <div
                    className={`mb-4 flex items-center gap-4 ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                      <img
                        src={exp.logo}
                        alt={`${exp.name} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-heading">
                        {exp.name}
                      </h3>
                      <p className="text-sm text-accent-fuchsia">
                        {exp.designation}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-xs uppercase tracking-wider text-muted">
                    {exp.duration} · {exp.location}
                  </p>
                  <ul
                    className={`space-y-2.5 text-sm leading-relaxed ${
                      i % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.jobIncludes.map((ji, index) => (
                      <li key={index} className="text-muted">
                        {ji}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
