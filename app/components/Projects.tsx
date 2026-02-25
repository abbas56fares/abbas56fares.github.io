"use client";

import { useEffect, useRef, JSX } from "react";
import { 
  FaTruck, 
  FaChartLine, 
  FaCoffee, 
  FaCalendarAlt, 
  FaMobileAlt,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: JSX.Element;
  github?: string;
  demo?: string;
  note?: string;
}

const projects: Project[] = [
 
  {
    title: "Full-Stack Delivery Management System",
    description: "A full-stack delivery management system",
    tech: ["Laravel + Blades", "PHP", "MySQL", "JavaScript", "Maps API (Leaflet)", "REST APIs"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: <FaTruck className="w-6 h-6 text-white" />, 
    github: "https://github.com/abbas56fares/BaladiPick",
    
  },
  {
    title: "HabitFlow",
    description: "A complete habit-tracking system",
    tech: ["React", "Node.js", "Express", "MySQL"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: <FaChartLine className="w-6 h-6 text-white" />,
    github: "https://github.com/abbas56fares/HabitFlow",
    demo: "https://ezhabitflow.netlify.app/",
    note: "deployed version is static",
  },
  {
    title: "Café Website with Online Ordering & Offline POS",
    description: "A full-stack café website",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "POS System"],
    gradient: "from-orange-500 via-red-500 to-yellow-500",
    icon: <FaCoffee className="w-6 h-6 text-white" />, 
    github: "https://github.com/abbas56fares/menu",
    demo: "https://issacaffee.netlify.app/",
    note: "deployed version is static",
  },
 
  {
    title: "Interactive Modern Agenda System",
    description: "An interactive Modern Agenda System",
    tech: ["Laravel + Blades", "MySQL", "JavaScript", "Tailwind CSS"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: <FaCalendarAlt className="w-6 h-6 text-white" />, 
  },
  {
    title: "Interactive Digital Menu System",
    description: "A full-featured Digital Menu System",
    tech: ["VILT Stack: Laravel, Vue, Inertia, Tailwind CSS", "MySQL", "JavaScript", "Admin Dashboard"],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    icon: <FaMobileAlt className="w-6 h-6 text-white" />, 
    github: "https://github.com/abbas56fares/menu-admin-portal",
    demo: "https://menu-static.laravel.cloud/",
    note: "deployed version is static",
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
      { threshold: 0.4 },
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Featured <span className="text-gradient ">Projects</span>
          </h2>
          <br />
          <p className="text-gray-400 text-lg md:text-xl">
            Building innovative solutions that make a difference
          </p>
        </div>
       

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card transition-all duration-700 glass modern-card p-6 spotlight group flex flex-col"
              style={{ transitionDelay: `${index * 10}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${project.gradient} flex items-center justify-center text-3xl mb-4  shadow-lg`}
              >
                {project.icon}
              </div>
             

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
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

              {/* Note */}
              <span className="text-red-600 font-bold text-xs">{project.note}</span>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/5">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-6 bg-linear-to-r ${project.gradient} text-xs sm:text-sm rounded-xl text-white font-medium text-center hover:shadow-lg hover:shadow-indigo-500/50 transition-all hover:scale-101`}
                  >
                    View Project
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
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

        
      </div>
    </section>
  );
}
