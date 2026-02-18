"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        color: "from-cyan-400 to-blue-500",
        level: 80,
      },
      {
        name: "Next.js",
        icon: "▲",
        color: "from-gray-600 to-gray-300",
        level: 75,
      },
      {
        name: "TypeScript",
        icon: "TS",
        color: "from-blue-500 to-blue-700",
        level: 65,
      },
      {
        name: "Vue",
        icon: "💚",
        color: "from-green-400 to-green-600",
        level: 80,
      },
    ],
  },
  {
    title: "Backend",
    gradient: "from-green-500 to-emerald-600",
    skills: [
      {
        name: "Node.js",
        icon: "🟢",
        color: "from-green-500 to-green-700",
        level: 70,
      },
      {
        name: "Express",
        icon: "⚡",
        color: "from-gray-600 to-gray-300",
        level: 70,
      },
      {
        name: "Laravel",
        icon: "🔴",
        color: "from-red-500 to-orange-600",
        level: 85,
      },
      {
        name: "MySQL",
        icon: "🗄️",
        color: "from-blue-500 to-cyan-600",
        level: 90,
      },
    ],
  },
  {
    title: "AI/ML/NLP",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "Python",
        icon: "🐍",
        color: "from-yellow-500 to-blue-600",
        level: 75,
      },
      {
        name: "NLP",
        icon: "💬",
        color: "from-purple-500 to-pink-500",
        level: 70,
      },
    ],
  },
  {
    title: "Tools",
    gradient: "from-orange-500 to-red-500",
    skills: [
      {
        name: "Git",
        icon: "🔧",
        color: "from-orange-600 to-red-600",
        level: 70,
      },
      {
        name: "AWS",
        icon: "☁️",
        color: "from-yellow-500 to-orange-500",
        level: 25,
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "from-blue-500 to-cyan-600",
        level: 40,
      },
      {
        name: "CI/CD",
        icon: "🚀",
        color: "from-indigo-500 to-purple-600",
        level: 60,
      },
    ],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  // State to track which skills have been scrolled into view
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const skillName = entry.target.getAttribute("data-skill");

          if (entry.isIntersecting) {
            if (skillName) {
              setVisibleSkills((prev) => new Set(prev).add(skillName));
            }

            entry.target.classList.add("opacity-100", "scale-100");
            entry.target.classList.remove("opacity-0", "scale-95");
          } else {
            if (skillName) {
              setVisibleSkills((prev) => {
                const newSet = new Set(prev);
                newSet.delete(skillName);
                return newSet;
              });
            }

            entry.target.classList.remove("opacity-100", "scale-100");
            entry.target.classList.add("opacity-0", "scale-95");
          }
        });
      },
      { threshold: 0.8 },
    );

    const cards = containerRef.current?.querySelectorAll(".skill-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full py-32 px-6 md:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Technologies I work with daily
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div
                  className={`h-1 w-12 bg-gradient-to-r ${category.gradient} rounded-full`}
                />
                <h3
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    data-skill={skill.name} // Added data attribute for the observer
                    className="skill-card opacity-0 scale-95 transition-all duration-500 modern-card p-6 group hover:scale-105 spotlight cursor-pointer relative"
                    style={{
                      transitionDelay: `${categoryIndex * 100 + index * 50}ms`,
                    }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="text-white font-bold text-lg text-center">
                        {skill.name}
                      </h4>
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                      />
                    </div>

                    <div className="flex justify-between items-end mt-4 mb-1">
                      <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                        Proficiency
                      </span>
                      <span className="text-gray-300 text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* The Progress Bar Track */}
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      {/* The Filled Bar */}
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-full rounded-full`}
                        style={{
                          // Fill from 0 to level only when visible
                          width: visibleSkills.has(skill.name)
                            ? `${skill.level}%`
                            : "0%",
                          transition: "width 3s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
