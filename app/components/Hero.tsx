"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Full-Stack Developer", "Problem Solver"];

  const [currentRole, setCurrentRole] = useState(0);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30 - 15,
        y: (e.clientY / window.innerHeight) * 30 - 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Floating gradient orbs with parallax */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-linear-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "1s",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass  animate-fade-in">
          <span className="text-sm font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Main heading with gradient */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
          <span className="block text-white mb-2">Hi, I&apos;m</span>
          <span className="block text-gradient">Abbas Fares</span>
        </h1>

        {/* Rotating role typewriter */}
        <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-bold text-white">
            {displayText}
            <span className="text-indigo-500 animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Building cutting-edge web applications with modern technologies.
          <br />
          Passionate about AI/ML, security, and creating exceptional user
          experiences.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap mt-5 mb-12">
          <a
            href="#projects"
            className="group relative px-6 py-2 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <svg
              className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 glass rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 hover:border-indigo-500/50"
          >
            Get In Touch
          </a>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {[
            "Laravel",
            "Vue",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "AI/ML",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
