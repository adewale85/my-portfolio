"use client";

import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070913]/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#623bf7] to-[#7f4efc] flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              <Code className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight group-hover:text-indigo-200 transition-colors">
              ADEQ Dev
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7 text-sm font-medium text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Hire Me CTA Button */}
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-5 py-2 rounded-lg bg-[#5d3bf6] hover:bg-[#502eed] text-white text-sm font-medium transition-all duration-200 shadow-[0_0_15px_rgba(93,59,246,0.35)] hover:shadow-[0_0_22px_rgba(93,59,246,0.6)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 bg-[#090c1a]/95 backdrop-blur-xl border-b border-slate-800/80 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-300 hover:text-white py-2 text-base font-medium transition-colors border-b border-slate-800/40"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mt-2 text-center py-2.5 rounded-lg bg-[#5d3bf6] hover:bg-[#502eed] text-white font-medium shadow-md shadow-indigo-600/30 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;