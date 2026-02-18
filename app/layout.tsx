import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbas Fares | Full-Stack Developer & AI Enthusiast",
  description:
    "Professional portfolio of Abbas Fares - Full-stack web developer specializing in React, Next.js, and AI/ML technologies.",
  keywords: [
    "Abbas Fares",
    "Web Developer",
    "Full-Stack",
    "React",
    "Next.js",
    "AI",
    "ML",
    "Portfolio",
  ],
  authors: [{ name: "Abbas Fares" }],
  creator: "Abbas Fares",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abbasfares.dev",
    siteName: "Abbas Fares Portfolio",
    title: "Abbas Fares | Full-Stack Developer & AI Enthusiast",
    description:
      "Professional portfolio showcasing web development and AI/ML projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbas Fares | Full-Stack Developer",
    description: "Full-stack web developer and AI enthusiast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f0f0f" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
