"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

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
     

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>
        <div className="px-2">
          {/* Bio Card - Wide */}
          <div className="reveal-card transition-all duration-700 delay-100">
            <div
              className="modern-card p-6 sm:p-8 lg:p-10"
              style={{
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                transition: "none",
                background: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
              }}
            >
              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                  <div className="relative h-40 w-40 overflow-hidden rounded-2xl sm:h-48 sm:w-48 lg:h-80 lg:w-80 lg:rounded-3xl">
                    <Image
                      src="/images/pic.jpg"
                      alt="My Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div
                  key={isFlipped ? "career" : "story"}
                  className="order-2 min-h-64 animate-fade-in lg:order-1"
                >
                  <h3 className="mb-4 text-3xl font-bold text-white text-center">
                    {isFlipped ? "My Career" : "My Story"}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-gray-400 sm:text-lg text-center">
                    {isFlipped
                      ? "I focus on building reliable full-stack products from concept to production, with strong attention to performance, maintainability, and user experience. I enjoy collaborating across teams, solving real business problems, and continuously learning modern technologies to deliver meaningful digital solutions."
                      : "I'm a passionate full-stack developer with a deep love for creating elegant, efficient solutions to complex problems. My journey in tech started with a curiosity about how things work, and has evolved into building web applications, AI-powered systems, and secure digital experiences."}
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <button
                      type="button"
                      onClick={() => setIsFlipped((prev) => !prev)}
                      className="mt-4 inline-flex items-center justify-center rounded-xl border border-white bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30"
                    >
                      {isFlipped ? "My Story" : "My Career"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
