"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: string;
  href: string;
  gradient: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "🐙",
    href: "https://github.com/abbas56fares/",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    href: "https://www.linkedin.com/in/abbas-fares-934781304",
    gradient: "from-blue-600 to-blue-800",
  },

  {
    name: "Email",
    icon: "✉️",
    href: "mailto:abbasfares56@gmail.com",
    gradient: "from-purple-600 to-pink-600",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Let&apos;s build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass modern-card p-8 spotlight">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-left"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-left"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none text-left"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full glass py-4 px-6 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent! ✓"
                    : "Send Message"}
              </button>

              {/* Status Message */}
              {status === "success" && (
                <div className="text-center text-green-400 animate-fade-in">
                  Thank you! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="glass modern-card p-8 spotlight text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out!
              </p>
              <div className="space-y-3 text-gray-400 flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <span>Available for remote work</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">💼</span>
                  <span>Open to freelance projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">⚡</span>
                  <span>Fast response time</span>
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass modern-card p-6 spotlight group hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${social.gradient} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-white font-medium">
                      {social.name}
                    </span>
                  </div>
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-linear-to-br ${social.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
