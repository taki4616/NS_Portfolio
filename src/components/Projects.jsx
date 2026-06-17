// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "NannyMatch Lite",
    description:
      "A matchmaking platform for families and nannies to connect. Built with React and localStorage to simulate real-world interactions, including profile creation, filters, and applications.",
    tech: ["React", "CSS", "localStorage"],
    link: "https://nannymatch-lite.netlify.app",
    repo: "https://github.com/taki4616/nannymatch-lite",
  },
  {
    title: "NannyVent",
    description:
      "A blog-style platform for nannies and parents to share workplace stories and parenting insights. Built with Flask and PostgreSQL.",
    tech: ["Flask", "PostgreSQL", "HTML/CSS"],
    link: "https://nannyvent.onrender.com",
    repo: "https://github.com/taki4616/nannyvent",
  },
  {
    title: "Career-Scraper",
    description:
      "A full-stack job aggregation tool that scrapes remote job listings from multiple sources and exposes them through a REST API and lightweight frontend.",
    tech: [
      "Python",
      "FastAPI",
      "Beautiful Soup",
      "SQLite",
      "Vanilla JavaScript",
      "HTML/CSS",
    ],
    repo: "https://github.com/taki4616/career-scraper",
    repoLabel: "GitHub Demo →",
  },
  {
    title: "Ventur",
    description:
      "An AI-powered outdoor adventure app that gives you a real-time \"Should I Go?\" verdict for hikes, beaches, and camping trips — combining live weather data with Claude AI to generate a personalized go/no-go recommendation.",
    tech: ["React", "Tailwind CSS", "Flask", "Anthropic Claude API", "Open-Meteo API"],
    link: "https://ventur-tau.vercel.app",
    repo: "https://github.com/taki4616/ventur",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul className="project-tech">
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
              )}

              {project.repo && (
  <a href={project.repo} target="_blank" rel="noopener noreferrer">
    {project.repoLabel || "GitHub →"}
  </a>
)}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
