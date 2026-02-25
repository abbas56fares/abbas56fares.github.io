"use client";

import { JSX, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: JSX.Element | string;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-9 h-9 hover:text-black transition-colors" />,
    href: "https://github.com",
    color: "from-white-500 to-gray-400",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-9 h-9 text-[#0077B5] hover:opacity-80 transition-opacity" />,
    href: "https://www.linkedin.com",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="w-9 h-9 text-gray-600 hover:text-red-500 transition-colors" />,
    href: "mailto:abbasfares56@gmail.com",
    color: "from-pink-500 to-red-500",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Netlify expects form-encoded data
    const formElement = e.currentTarget;
    const formDataObj = new FormData(formElement);
    
    // @ts-ignore - formatting for Netlify body
    const body = new URLSearchParams(formDataObj).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">Let&apos;s build something amazing together</p>
        </div>

        <div className="grid">
          <div className="glass modern-card p-8 spotlight">
            {/* NETLIFY FORM CONFIGURATION */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
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

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
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

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full glass py-4 px-6 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent! ✓" : status === "error" ? "Error! Try Again" : "Send Message"}
              </button>

              {status === "success" && (
                <div className="text-center text-green-400 animate-fade-in font-medium">
                  Thank you! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-center text-red-400 animate-fade-in font-medium">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
