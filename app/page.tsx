import About from "./components/About";
import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="relative w-full bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Navigation */}
      <NavBar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="relative w-full py-16 px-4 border-t border-white/5 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-indigo-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo & Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <h3 className="text-2xl font-bold">
                  Abbas <span className="text-gradient">Fares</span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Full-Stack Developer • Problem Solver
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: "🐙", href: "https://github.com/abbas56fares/", label: "GitHub" },
                { icon: "💼", href: "https://www.linkedin.com/in/abbas-fares-934781304", label: "LinkedIn" },
                {
                  icon: "✉️",
                  href: "mailto:@abbasfares56@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl hover:scale-110 hover:border-indigo-500/50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Abbas Fares. All rights reserved.
            </p>
           
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </main>
  );
}
