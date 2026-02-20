"use client";

import { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Full-Stack Delivery Management System",
    description:
      "A full-stack delivery management system with global admin oversight and multi-branch shop-owner control. Built real-time driver features including nearby-order detection, map tracking, and secure QR/OTP delivery validation, supported by role-based operational dashboards.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Maps API",
      "REST APIs",
      "Git",
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "🚚",
    github: "https://github.com/abbas56fares/BaladiPick",
  },
  {
    title: "HabitFlow",
    description:
      "A complete habit-tracking system with React frontend, Node.js/Express API, and MySQL database. Helps users build and maintain positive habits with tracking and analytics.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "📈",
    github: "https://github.com/abbas56fares/HabitFlow",
    demo: "https://ezhabitflow.netlify.app/",
  },
  {
    title: "Café Website with Online Ordering & Offline POS",
    description:
      "A full-stack café website enabling online ordering with HTML, CSS, and JavaScript frontend and PHP backend. Integrated with an offline Point of Sale (POS) system to streamline in-store and online order management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "POS System"],
    gradient: "from-orange-500 via-red-500 to-yellow-500",
    icon: "☕",
    github: "https://github.com/abbas56fares/menu",
    demo: "https://issacaffee.netlify.app/",
  },
  {
    title: "Chatbot using Python",
    description:
      "A basic chatbot developed using Python and the NLTK open-source library for natural language processing and intelligent conversation.",
    tech: ["Python", "NLTK", "NLP"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: "🤖",
    // github: "https://github.com/abbas56fares/",
  },
  {
    title: "Interactive Modern Agenda System",
    description:
      "An interactive Modern Agenda System built with Laravel and MySQL. Features scheduling, task management, and user-friendly interface for organized planning.",
    tech: ["Laravel", "MySQL", "JavaScript", "HTML/CSS"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: "📅",
    // github: "https://github.com/abbas56fares/Agenda",
  },
  {
    title: "Interactive Digital Menu System",
    description:
      "A full-featured Digital Menu System built with Laravel including a complete admin dashboard for restaurant or café management. Allows easy menu updates and order tracking.",
    tech: ["Laravel", "MySQL", "JavaScript", "Admin Dashboard"],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    icon: "📱",
    github: "https://github.com/abbas56fares/menu-admin-portal",
    demo: "https://menu-static.laravel.cloud/",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
          else {
             entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = containerRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full py-32 px-6 md:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Building innovative solutions that make a difference
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card transition-all duration-700 glass modern-card p-6 spotlight group hover:scale-[1.02] flex flex-col"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${project.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-indigo-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/5">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-6 bg-linear-to-r ${project.gradient} rounded-xl text-white font-medium text-center hover:shadow-lg hover:shadow-indigo-500/50 transition-all hover:scale-105`}
                  >
                    View Project
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>GitHub</span>
                </a>
              </div>

              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-gray-400 text-lg">
            More amazing projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
