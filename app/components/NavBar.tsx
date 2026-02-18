"use client";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      {/* --- DESKTOP NAV: Stays as a wide bar --- */}
      <div className="hidden md:flex justify-center items-center glass rounded-full px-8 py-4">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-300 hover:text-indigo-400 font-medium transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* --- MOBILE NAV: Separated logic --- */}
      <div className="md:hidden flex flex-col items-end">
        {/* The Toggle Button: Styled as a circle when closed */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`glass flex items-center justify-center transition-all duration-300 active:scale-95 text-white hover:text-indigo-400 
            ${isOpen ? "rounded-full p-2 mb-2" : "w-12 h-12 rounded-full"}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* The Menu Content: Opens as a full-width box */}
        {isOpen && (
          <div className="glass w-full rounded-2xl p-6 animate-fade-in border border-white/10">
            <div className="flex flex-col gap-3 ">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative text-gray-300 hover:text-indigo-400 font-medium transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
