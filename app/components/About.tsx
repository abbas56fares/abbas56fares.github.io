"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = sectionRef.current?.querySelectorAll(".reveal-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-32 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Building the future, one line at a time
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {/* Stats Card - Tall */}
          <div className="reveal-card opacity-0 translate-y-10 transition-all duration-700 lg:row-span-2 modern-card p-8 spotlight group hover:scale-[1.02] text-center">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">
                  Quick Stats
                </h3>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-black text-gradient mb-2">
                    3+
                  </div>
                  <p className="text-gray-400 text-lg">Years Experience</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-gradient mb-2">
                    20+
                  </div>
                  <p className="text-gray-400 text-lg">Projects Completed</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-gradient mb-2">
                    10+
                  </div>
                  <p className="text-gray-400 text-lg">Technologies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Card - Wide */}
          <div className="reveal-card opacity-0 translate-y-10 transition-all duration-700 delay-100 lg:col-span-2 modern-card p-8 spotlight group hover:scale-[1.02] text-center">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">My Story</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer with a deep love for
              creating elegant, efficient solutions to complex problems. My
              journey in tech started with a curiosity about how things work,
              and has evolved into a career building cutting-edge web
              applications, AI-powered systems, and secure digital experiences.
            </p>
          </div>

          {/* Education Card */}
          <div className="reveal-card opacity-0 translate-y-10 transition-all duration-700 delay-200 modern-card p-8 spotlight group hover:scale-[1.02] text-center">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-pink-500 to-red-500 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <p className="text-gray-400 leading-relaxed">
              Bachelor&apos;s in Computer Science
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Focused on AI/ML, Software Engineering, and Cybersecurity
            </p>
          </div>

          {/* What I Do Card */}
          <div className="reveal-card opacity-0 translate-y-10 transition-all duration-700 delay-300 modern-card p-8 spotlight group hover:scale-[1.02] text-center">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-indigo-400">▸</span> Full-Stack
                Development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> AI/ML Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">▸</span> Security Solutions
              </li>
            </ul>
          </div>

          {/* Interests Card */}
          <div className="reveal-card opacity-0 translate-y-10 transition-all duration-700 delay-400 modern-card p-8 spotlight group hover:scale-[1.02] text-center">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["AI/ML", "Web3", "Cloud", "DevOps", "Open Source"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 glass rounded-full text-sm text-gray-300"
                  >
                    {interest}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
