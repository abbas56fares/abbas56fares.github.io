"use client";

import { useEffect, useRef, useState } from "react";

// Your CV Data
const CV_DATA = {
  name: "Abbas Fares",
  email: "faresabbas1997@gmail.com",
  phone: "+961 71232811",
  address: "Tebnine, Lebanon",
  nationality: "Lebanese",
  dateOfBirth: "March 23, 1997",
  linkedin: "https://www.linkedin.com/in/abbas-fares-934781304",
  github: "https://github.com/abbas56fares/",

  profile:
    "Junior Full-Stack Web Developer with a Computer Science degree and practical experience in Laravel, React, and MySQL, building responsive frontends, scalable backend APIs, and business dashboards. Looking to contribute to a professional engineering team as a Full-Stack or Backend Developer.",

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution:
      "Lebanese International University (LIU), Tyre Branch, Lebanon",
    duration: "March 2023 – January 2026",
    coursework: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Natural Language Processing",
      "Machine Learning",
    ],
  },

  certifications: [
    "Get Connected - Cisco CCNA: Introduction to Networks",
    "CCNA: Switching, Routing, and Wireless",
  ],

  languages: {
    Arabic: "Mother Tongue",
    English: "Intermediate",
    French: "A1",
  },

  experience: {
    title: "Full-Stack Web Developer Intern",
    company: "VioletPro",
    duration: "September 2025 – November 2025",
    responsibilities: [
      "Developed an interactive Modern Agenda System using Laravel and MySQL",
      "Built an interactive Digital Menu System (Laravel) with a complete admin dashboard",
      "Designed and completed an interactive portfolio website with an admin CMS",
      "Enhanced interactive system performance, fixed bugs, and improved responsiveness",
      "Worked with GitHub, structured codebases, and optimized backend logic",
    ],
  },

  skills: {
    programming: ["PHP", "Java", "Python", "C++"],
    web: [
      "Laravel",
      "React.js",
      "Node.js",
      "JavaScript",
      "Bootstrap",
      "Tailwind",
      "Responsive Design",
      "HTML",
      "CSS",
    ],
    database: ["MySQL"],
    tools: [
      "Git",
      "GitHub",
      "REST APIs",
      "Office Pack (Word, PowerPoint, Excel)",
    ],
  },

  softSkills: [
    "Critical Thinking & Problem Solving",
    "Effective Teamwork",
    "Intellectual Curiosity",
    "Adaptability & Continuous Learning",
    "Time Management",
  ],

  projects: [
    {
      name: "Full-Stack Delivery Management System",
      description:
        "Senior project with global admin oversight, multi-branch control, real-time driver features, QR/OTP validation",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Maps API", "REST APIs"],
      date: "September 2025",
    },
    {
      name: "HabitFlow",
      description:
        "Complete habit-tracking system with React frontend, Node.js/Express API, and MySQL database",
      tech: ["React", "Node.js", "Express", "MySQL"],
      date: "November 2025",
    },
    {
      name: "Café Website with Online Ordering & POS",
      description:
        "Full-stack café website with online ordering and offline Point of Sale system integration",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      date: "July 2024",
    },
    {
      name: "Chatbot using Python",
      description: "Basic chatbot using Python and NLTK library",
      tech: ["Python", "NLTK", "NLP"],
      date: "May 2024",
    },
    {
      name: "Interactive Modern Agenda System",
      description:
        "Agenda system with Laravel and MySQL for scheduling and task management",
      tech: ["Laravel", "MySQL", "JavaScript"],
      date: "2025",
    },
    {
      name: "Interactive Digital Menu System",
      description:
        "Digital menu system with complete admin dashboard for restaurant management",
      tech: ["Laravel", "MySQL", "JavaScript"],
      date: "2025",
      demo: "https://menu-admin-portal-fnjxa9.laravel.cloud/",
    },
  ],
};

interface Message {
  text: string;
  sender: "user" | "bot";
}

// Pattern matching function
function getResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  const tokens = message
    .split(/\W+/)
    .filter((word) => word.length > 2)
    .map((w) => w.toLowerCase());

  // Greetings
  const greetings = ["hello", "hi", "hey", "greetings"];
  if (greetings.some((greet) => message.includes(greet))) {
    return "Hello! I'm Abbas Fares' AI assistant. I can help you learn about Abbas's skills, experience, projects, education, and contact information. What would you like to know?";
  }

  // Name
  if (tokens.some((w) => ["name", "called", "who"].includes(w))) {
    return `My creator is ${CV_DATA.name}, a Full-Stack Web Developer passionate about building modern web applications.`;
  }

  // Contact
  if (tokens.some((w) => ["email", "mail", "contact"].includes(w))) {
    return `You can reach Abbas at:\n📧 Email: ${CV_DATA.email}\n📱 Phone: ${CV_DATA.phone}\n📍 Address: ${CV_DATA.address}\n💼 LinkedIn: ${CV_DATA.linkedin}\n🐙 GitHub: ${CV_DATA.github}`;
  }

  if (tokens.some((w) => ["phone", "number", "call"].includes(w))) {
    return `Abbas's phone number is: ${CV_DATA.phone}`;
  }

  if (
    tokens.some((w) => ["address", "location", "live", "where"].includes(w))
  ) {
    return `Abbas is based in ${CV_DATA.address} (Nationality: ${CV_DATA.nationality})`;
  }

  if (tokens.includes("linkedin")) {
    return `Connect with Abbas on LinkedIn: ${CV_DATA.linkedin}`;
  }

  if (tokens.includes("github")) {
    return `Check out Abbas's GitHub profile: ${CV_DATA.github}`;
  }

  if (tokens.some((w) => ["age", "born", "birthday", "birth"].includes(w))) {
    return `Abbas was born on ${CV_DATA.dateOfBirth}`;
  }

  if (tokens.some((w) => ["profile", "about", "summary"].includes(w))) {
    return `📝 About Abbas:\n\n${CV_DATA.profile}`;
  }

  // Education
  if (
    tokens.some((w) =>
      ["education", "degree", "studied", "university", "college"].includes(w),
    )
  ) {
    const edu = CV_DATA.education;
    let response = `🎓 Education:\n\n${edu.degree}\n${edu.institution}\n${edu.duration}\n\nCoursework:\n`;
    edu.coursework.forEach((course) => {
      response += `• ${course}\n`;
    });
    return response;
  }

  // Certifications
  if (
    tokens.some((w) =>
      [
        "certification",
        "certifications",
        "certificate",
        "cisco",
        "ccna",
      ].includes(w),
    )
  ) {
    let response = "🏆 Certifications:\n\n";
    CV_DATA.certifications.forEach((cert) => {
      response += `• ${cert}\n`;
    });
    return response;
  }

  // Languages
  if (
    tokens.some((w) =>
      [
        "language",
        "languages",
        "speak",
        "arabic",
        "english",
        "french",
      ].includes(w),
    )
  ) {
    let response = "🌍 Languages:\n\n";
    Object.entries(CV_DATA.languages).forEach(([lang, level]) => {
      response += `• ${lang}: ${level}\n`;
    });
    return response;
  }

  // Experience
  if (
    tokens.some((w) =>
      [
        "experience",
        "work",
        "job",
        "internship",
        "worked",
        "violetpro",
      ].includes(w),
    )
  ) {
    const exp = CV_DATA.experience;
    let response = `💼 Work Experience:\n\n${exp.title} at ${exp.company}\n${exp.duration}\n\nKey responsibilities:\n`;
    exp.responsibilities.forEach((resp) => {
      response += `• ${resp}\n`;
    });
    return response;
  }

  // Skills
  if (
    tokens.some((w) =>
      ["skill", "skills", "technology", "technologies", "know"].includes(w),
    )
  ) {
    const skills = CV_DATA.skills;
    let response = "🛠️ Technical Skills:\n\n";
    response += `Programming: ${skills.programming.join(", ")}\n\n`;
    response += `Web Development: ${skills.web.join(", ")}\n\n`;
    response += `Database: ${skills.database.join(", ")}\n\n`;
    response += `Tools: ${skills.tools.join(", ")}`;
    return response;
  }

  // Soft skills
  if (
    tokens.some((w) =>
      ["soft", "personal", "teamwork", "management"].includes(w),
    )
  ) {
    let response = "💡 Soft Skills:\n\n";
    CV_DATA.softSkills.forEach((skill) => {
      response += `• ${skill}\n`;
    });
    return response;
  }

  // Specific skills
  if (tokens.includes("programming")) {
    return `Programming Languages: ${CV_DATA.skills.programming.join(", ")}`;
  }

  if (
    tokens.some((w) =>
      ["web", "frontend", "react", "laravel", "nodejs", "javascript"].includes(
        w,
      ),
    )
  ) {
    return `Web Development: ${CV_DATA.skills.web.join(", ")}`;
  }

  if (tokens.some((w) => ["database", "mysql", "sql"].includes(w))) {
    return `Database: ${CV_DATA.skills.database.join(", ")}`;
  }

  // Projects
  if (
    tokens.some((w) =>
      ["project", "projects", "built", "developed", "portfolio"].includes(w),
    )
  ) {
    let response = "🚀 Featured Projects:\n\n";
    CV_DATA.projects.forEach((project, i) => {
      response += `${i + 1}. ${project.name} (${project.date})\n`;
      response += `   ${project.description}\n`;
      response += `   Tech: ${project.tech.join(", ")}\n`;
      if (project.demo) {
        response += `   Demo: ${project.demo}\n`;
      }
      response += "\n";
    });
    return response;
  }

  // Specific projects
  if (message.includes("delivery") || message.includes("senior")) {
    const project = CV_DATA.projects[0];
    return `📦 ${project.name}\n${project.description}\nTechnologies: ${project.tech.join(", ")}\nDate: ${project.date}`;
  }

  if (message.includes("habitflow") || message.includes("habit")) {
    const project = CV_DATA.projects[1];
    return `📈 ${project.name}\n${project.description}\nTechnologies: ${project.tech.join(", ")}\nDate: ${project.date}`;
  }

  if (message.includes("menu") || message.includes("digital")) {
    const project = CV_DATA.projects[5];
    return `📱 ${project.name}\n${project.description}\nTechnologies: ${project.tech.join(", ")}\nDate: ${project.date}\nLive Demo: ${project.demo}`;
  }

  // Help
  if (tokens.some((w) => ["help", "can", "what"].includes(w))) {
    return "I can provide information about Abbas Fares including:\n• Contact details (email, phone, address, LinkedIn, GitHub)\n• Profile summary\n• Education background & coursework\n• Certifications (Cisco CCNA)\n• Work experience & internships\n• Technical & soft skills\n• Programming languages (PHP, Java, Python, C++)\n• Projects portfolio\n• Spoken languages\n\nJust ask me anything!";
  }

  // Default
  return "I'm not sure about that. You can ask me about Abbas's skills, experience, projects, education, or contact information. Type 'help' to see what I can do!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi! I'm Abbas Fares' AI assistant. I can help you learn about Abbas's skills, experience, projects, education, and contact information. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getResponse(input);
      const botMessage: Message = { text: botResponse, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-150 bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-in">
          {/* Header */}
          <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-t-2xl">
            <h3 className="text-lg font-bold">Abbas Fares AI Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about Abbas!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-2xl whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-md rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-sm shadow-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
