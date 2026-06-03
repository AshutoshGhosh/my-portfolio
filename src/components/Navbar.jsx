import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "work", label: "Work" },
  { to: "contact", label: "Contact" },
];

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
  {
    href: "https://drive.google.com/file/d/1eN1Hx6VzBMaDg65IHga83BE2hNqCZZXA/view?usp=sharing",
    label: "Resume",
    icon: <BsFillPersonLinesFill size={18} />,
    external: true,
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav((v) => !v);
  const closeNav = () => setNav(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 transition-all duration-500 ${
          scrolled ? "mt-3 md:mt-4" : "mt-0"
        }`}
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer font-display text-xl font-extrabold tracking-tight text-heading"
        >
          Ashutosh<span className="gradient-text-static">.</span>
        </Link>

        {/* Desktop menu (glass pill) */}
        <ul className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to} className="!px-0">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-heading bg-white/10"
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-heading"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop socials */}
        <div className="hidden items-center gap-2 md:flex">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              {...(s.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-all duration-300 hover:text-heading hover:shadow-glow"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={handleClick}
          aria-label="Toggle menu"
          className="z-50 flex h-10 w-10 items-center justify-center rounded-full glass text-heading md:hidden"
        >
          {!nav ? <FaBars size={18} /> : <FaTimes size={18} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          nav ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <li key={link.to} className="!px-0">
              <Link
                onClick={closeNav}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                style={{ transitionDelay: nav ? `${i * 60}ms` : "0ms" }}
                className={`cursor-pointer font-display text-3xl font-semibold text-muted transition-all duration-500 hover:text-heading ${
                  nav ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              {...(s.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-muted transition-colors hover:text-heading"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
