import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/ashutosh-ghosh",
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    external: true,
  },
  {
    href: "https://github.com/AshutoshGhosh",
    label: "GitHub",
    icon: <FaGithub size={18} />,
    external: true,
  },
  {
    href: "mailto:ghoshashutosh01@gmail.com",
    label: "Email",
    icon: <HiOutlineMail size={18} />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-heading">
            Ashutosh<span className="gradient-text-static">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} Ashutosh Ghosh. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              {...(s.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted transition-all duration-300 hover:text-heading hover:shadow-glow"
            >
              {s.icon}
            </a>
          ))}
          <Link
            to="home"
            smooth={true}
            duration={500}
            aria-label="Back to top"
            title="Back to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-accent-gradient text-white transition-transform duration-300 hover:scale-110"
          >
            <FiArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
